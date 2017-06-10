import { Component, OnInit } from '@angular/core';
import { Message } from './message.model'
import {MessagesService} from "./messages.service";

@Component({
  selector: 'cms-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers: [MessagesService]
})
export class MessagesComponent implements OnInit {
  messageSelected: Message;
  constructor(private messagesService: MessagesService ) { }

  ngOnInit() {
    this.messagesService.messageSelected
      .subscribe(
        (messages: Message) => {
          this.messageSelected = messages;
        }
      );
  }

}
