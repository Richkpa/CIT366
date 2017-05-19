import { Component, OnInit } from '@angular/core';
import {Message} from '../message.module'
@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message('1', 'James', 'This is me', 'Raw'),
    new Message('2', 'Peter', 'This is how we roll', 'Sam'),
    new Message('3', 'Andrew', 'This is my home', 'MAry')

  ];

  constructor() { }

  ngOnInit() {
  }
  onMessageAdded(message: Message) {
    this.messages.push(message);
  }

}
