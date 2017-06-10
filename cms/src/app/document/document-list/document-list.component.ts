import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Document} from '../document.model'
import {DocumentsService} from "../documents.service";
import {MOCKDOCUMENTS} from "../MOCKDOCUMENTS"

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  document: Document[] = [];

  constructor(private documentService: DocumentsService) { }

  ngOnInit() {
    this.document = this.documentService.getDocuments();
  }

  onSelected(document: Document) {
    this.documentService.documentSelected.emit(document);
  }

}
