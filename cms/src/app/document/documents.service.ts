import { Injectable, EventEmitter } from '@angular/core';
import { Document } from './document.model';
import  { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DocumentsService {
  documentListChangedEvent = new Subject<Document[]>();
  documentSelected = new EventEmitter<Document>();
  // documentChangedEvent = new EventEmitter<Document[]>();

  public maxDocumentId: number;
 private documents: Document[] = [];

  getDocuments() {
    return this.documents.slice();
  }
  initDcocument(){
    this.http.get('https://breakingdawn-17210.firebaseio.com/cms.json')
      .map(
        (response: Response) => {
          const documents: Document[] = response.json();
          for (let document of documents) {
            if (!document['Document']) {
              document['Document'] = [];
            }
          }
          return documents;
        }
      ).subscribe(
      ( documentsReturned: Document[]) => {
        this.documents = documentsReturned
        this.maxDocumentId = this.getMaxId()
        let documentsListClone = this.documents.slice()
        this.documentListChangedEvent.next(documentsListClone)
      }
    )

  }

  constructor(private http, initDcocument: Document[]) {
  }

  getDocument(){
    return this.documents.slice();
  }

  getDocumentt(index: string) {
    return this.documents[index];

  }
 deleteDocument(document: Document) {
    if (document === undefined || document === null) {
      return;
    }
    const pos = this.documents.indexOf(document);
    if (pos < 0) {
      return;
    }
    this.documents = this.documents.splice(pos, 1)
    let documentsListClone = this.documents.slice()
    this.documentListChangedEvent.next(documentsListClone);
 }

  getMaxId(): number {
    let maxId: number = 0;
    for (let document of this.documents){
      let currentID: number = parseInt(document.id);
      if (currentID > maxId) {
        maxId = currentID
      }
    }
    return maxId
  }

  addDocument(newDocument: Document){
    if (newDocument === undefined || newDocument === null) {
      return
    }

    this.maxDocumentId++
    newDocument.id = String(this.maxDocumentId)
    // this.maxDocumentId = parseInt(newDocument.id)
    this.documents.push(newDocument)
    let documentsListClone = this.documents.slice()
    this.documentListChangedEvent.next(documentsListClone);
  }

  updateDocument(originalDocument: Document,
                 newDocument: Document){
    if (originalDocument || newDocument === undefined || originalDocument || newDocument === null) {
        return
    }
    const pos = this.documents.indexOf(originalDocument)
    if (pos < 0 ) {
      return
    }
    newDocument.id = originalDocument.id
    this.documents[pos] = newDocument
    let documentsListClone = this.documents.slice()
    this.documentListChangedEvent.next(documentsListClone);
  }


}
