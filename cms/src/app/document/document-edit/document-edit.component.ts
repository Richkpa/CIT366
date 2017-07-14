import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {DocumentsService} from "../documents.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Document} from '../document.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { WindRefService } from '../../wind-ref.service'

@Component({
  selector: 'cms-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
 document: Document;
 originalDocument: Document;
 editMode: boolean = false;
 id: string;



  constructor( private documentService: DocumentsService,
               private router: Router,
               private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];

          if (this.id === undefined || this.id === null) {
           this.editMode = false;
           return
          }

          this.originalDocument = this.documentService.getDocument(this.id);
          if (this.originalDocument === undefined || this.originalDocument === null ){
            return
          }
          this.editMode = true;
          this.document = JSON.parse(JSON.stringify(this.originalDocument));
        }
      );

  }

  onSubmit(form: NgForm) {
    const value = form.value;
    let newDocument = null;
    if (this.editMode){
     newDocument = new Document(this.originalDocument.id, value.documentTitle, value.docDescription,
        value.documentUrl, []);
      this.documentService.updateDocument(this.originalDocument, newDocument)
    }
    else {
     newDocument = new Document('', value.documentTitle, value.docDescription,
        value.documentUrl, []);
      this.documentService.addDocument(newDocument)
    }
    this.router.navigate(["/document"]);
  }

  onCancel() {
    this.documentService.deleteDocument(this.document)
    this.router.navigate(["/document"]);
  }
}
