import { Injectable, EventEmitter } from '@angular/core';
import { Document } from './document.model';
import  { MOCKDOCUMENTS } from './MOCKDOCUMENTS'

@Injectable()
export class DocumentsService {
  documentSelected = new EventEmitter<Document>();

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

  constructor() {
    this.document = MOCKDOCUMENTS;
  }
}
