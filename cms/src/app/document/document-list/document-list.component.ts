import { Component, OnInit, OnDestroy, Output, EventEmitter,} from '@angular/core';
import {Document} from '../document.model'
import {DocumentsService} from "../documents.service";
import { Subscription } from 'rxjs/Subscription';
import {MOCKDOCUMENTS} from "../MOCKDOCUMENTS"

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit, OnDestroy {

  document: Document[] = [];
  private subscription: Subscription;

  constructor(private documentService: DocumentsService) {
    this.document = this.documentService.getDocuments();
  }

  ngOnInit() {
    this.document = this.documentService.getDocuments();
     this.documentService.documentListChangedEvent
  .subscribe(
    (documents: Document[]) => {
      this.document = documents;
    }
  );
    this.document = this.documentService.getDocuments();
    this.subscription = this.documentService.documentListChangedEvent
      .subscribe(
        (documentList: Document[]) => {
          this.document = documentList;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


