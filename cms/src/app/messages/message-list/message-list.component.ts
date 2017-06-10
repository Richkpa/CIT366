import { Component, OnInit } from '@angular/core';
import {Message} from '../message.model';
import {MOCKMESSAGES} from "../MOCKMESSAGES";
import { MessagesService } from '../messages.service'

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']

})
export class MessageListComponent implements OnInit {
  messages: Message[];

  constructor(private messageService: MessagesService) {
  }

  ngOnInit() {
    this.messages = this.messageService.getMessages();
    this.messageService.messageSelected.subscribe((messages: Message[]) => {
        this.messages = messages;
      }
    );
  }

  onAddItem(messages: Message) {
    this.messages.push(messages);
  }
}

