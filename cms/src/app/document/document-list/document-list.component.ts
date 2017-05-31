import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Document} from '../document.module'
@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() documentWasSelected = new EventEmitter<Document>();
  document: Document[] = [
    new Document( '1', 'Richlue', 'I am on the move, no going back',
      'https://web.byui.edu/Directory/Employee', null),

    new Document( '2', 'Peter', 'I am on the move, no going back',
      'https://web.byui.edu/Directory/Employee', null),

    new Document( '3', 'Andrew', 'I am on the move, no going back',
      'https://web.byui.edu/Directory/Employee/dhfeyif', null),

    new Document( '4', 'Mewon', 'I am on the move, no going back',
      'https://web.byui.edu/Directory/Employee/jfgdfggff', null),

    new Document( '5', 'Elijah', 'I am on the move, no going back',
      'https://web.byui.edu/Directory/Employee/jacksonfgfgs', null),

    new Document( '6', 'Saye', 'I am on the move, no going back',
      'https://web.byui.edu/Directory/Employee/jacksodfgsdfg', null)
  ];

  constructor() { }

  ngOnInit() {
  }
  onDocumentSelected(document: Document) {
    this.documentWasSelected.emit(document)
  }

}
