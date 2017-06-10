import { Component, OnInit } from '@angular/core';
import {Document} from './document.model'
import {DocumentsService} from "./documents.service";
@Component({
  selector: 'cms-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css'],
  providers: [DocumentsService]
})
export class DocumentComponent implements OnInit {
  documentSelected: Document;
  constructor(private documentService: DocumentsService) { }

  ngOnInit() {
    this.documentService.documentSelected
      .subscribe(
        (document: Document) => {
          this.documentSelected = document;
        }
      );
  }

}
