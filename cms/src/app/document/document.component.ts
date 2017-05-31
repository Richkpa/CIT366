import { Component, OnInit } from '@angular/core';
import {Document} from './document.module'
@Component({
  selector: 'cms-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  documentSelected: Document;
  constructor() { }

  ngOnInit() {
  }

}
