import { Injectable, EventEmitter } from '@angular/core';
import { Document } from './document.model';
import { Http, Response, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

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
  storeDocuments(){
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('https://breakingdawn-17210.firebaseio.com/documents.json',
      JSON.stringify(this.documents),
    {headers: headers});
  }

  initDocument(){
    this.http.get('https://breakingdawn-17210.firebaseio.com/documents.json')
      .map((response: Response) => response.json())
      .subscribe(
        (returnDocument: Document[]) => {
          this.documents = returnDocument;
          this.documentListChangedEvent.next(this.documents);
          this.maxDocumentId = this.getMaxId();
        }
      );
  }

  constructor(private http: Http, ) {
    this.initDocument();
  }

  getDocument(id: string): Document {
    for (let document of this.documents)
      if (document.id === id)
        return document;
    return null;
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
    this.storeDocuments();
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
    this.documents.push(newDocument)
    this.storeDocuments();
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
    this.storeDocuments();
  }


}
