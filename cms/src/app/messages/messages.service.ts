import { Injectable, EventEmitter } from '@angular/core';
import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { Contact } from '../contacts/contact.model'

@Injectable()
export class MessagesService {

  messageSelected = new EventEmitter<Message[]>();

  private messages: Message[] = [];


  getMessages() {
    return this.messages.slice();
  }

  getMessage(id: string): Message {
    for (let messages of this.messages)
      if (messages.id === id)
        return messages;
    return null;
  }


  addMessage(message: Message) {
    this.messages.push(message);
    this.messageSelected.emit(this.messages.slice());
  }

  constructor() {
    this.messages = MOCKMESSAGES;

  }

}
