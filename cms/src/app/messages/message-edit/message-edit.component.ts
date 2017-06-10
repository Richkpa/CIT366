import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import {Message} from '../message.model';
import { MessagesService } from '../messages.service'
import {ContactService} from "../../contacts/contact.service";
@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subjectInput') subjectInputRef: ElementRef;
  @ViewChild('msgInput') msgInputRef: ElementRef;
  @Output() msgAdded = new EventEmitter<Message>();

  constructor(private messageService: MessagesService, private contactService: ContactService) { }

  ngOnInit() {
  }
  onAddItem() {
    const subName = this.subjectInputRef.nativeElement.value;
    const msgDetail = this.msgInputRef.nativeElement.value;
    const sender = this.contactService.currentContact.id;
    const newMessage = new Message('id', subName, msgDetail, sender);
    this.messageService.addMessage(newMessage);
  }
onClear() {
  this.subjectInputRef.nativeElement.value = '';
  this.msgInputRef.nativeElement.value = '';
}
}
