import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Document} from '../document.model';
import {DocumentsService} from '../documents.service';
import { WindRefService } from '../../wind-ref.service'

@Component({
  selector: 'cms-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {

 document: Document;
 nativeWindow: any;
 id: string;

  constructor(private documentsService: DocumentsService,
              private windRefService: WindRefService,
              private router: Router,
              private route: ActivatedRoute) {
    this.nativeWindow = windRefService.getNativeWindow();
  }
onView() {
    if (this.document.url) {
      this.nativeWindow.open(this.document.url);
    }
}
onDelete(){
    this.documentsService.deleteDocument(this.document)
  this.router.navigate(["/document"]);
}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.document = this.documentsService.getDocument(this.id);
        }
      );

  }


}
