import { Injectable, EventEmitter } from '@angular/core';
import { Document } from './document.model';
import  { MOCKDOCUMENTS } from './MOCKDOCUMENTS'

@Injectable()
export class DocumentsService {
  documentSelected = new EventEmitter<Document>();
  documentChangedEvent = new EventEmitter<Document[]>();

 private document: Document[] = [];

  getDocuments() {
    return this.document.slice();
  }

  getDocument(id: string): Document {
    for (let document of this.document)
      if (document.id === id)
        return document;
    return null;
  }

  getDocumentt(index: string) {
    return this.document[index];

  }
 deleteDocument(document: Document) {
    if (document === null) {
      return;
    }
    const pos = this.document.indexOf(document);
    if (pos < 0) {
      return;
    }
    this.document.splice(pos, 1);
    this.documentChangedEvent.emit(this.document.slice());
 }

  constructor() {
    this.document = MOCKDOCUMENTS;
  }
}
