import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import {Message} from '../message.module'
@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subjectInput') subjectInputRef: ElementRef;
  @ViewChild('msgInput') msgInputRef: ElementRef;
  @Output() msgAdded = new EventEmitter<Message>();

  constructor() { }

  ngOnInit() {
  }
  onAddItem() {
    const subName = this.subjectInputRef.nativeElement.value;
    const msgDetail = this.msgInputRef.nativeElement.value;
    const newMessage = new Message('id', subName, msgDetail, 'Richlue');
    this.msgAdded.emit(newMessage);
  }
onClear() {
  this.subjectInputRef.nativeElement.value = '';
  this.msgInputRef.nativeElement.value = '';
}
}
