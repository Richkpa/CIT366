import { Injectable, EventEmitter } from '@angular/core';
import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
import { Http, Response, Headers } from '@angular/http';
import { Contact } from '../contacts/contact.model'

@Injectable()
export class MessagesService {

  messageListChangedEvent = new Subject<Message[]>();
  messageSelected = new EventEmitter<Message>();

  private messages: Message[] = [];
  public maxMessageId: number;


  getMessages() {
    return this.messages.slice();
  }

  getMessage(id: string): Message {
    for (let messages of this.messages)
      if (messages.id === id)
        return messages;
    return null;
  }


  // addMessage(message: Message) {
  //   this.messages.push(message);
  //   this.messageSelected.emit(this.messages.slice());
  // }

  addMessage(newMessage: Message){
    if (newMessage === undefined || newMessage === null) {
      return
    }

    this.maxMessageId++
    newMessage.id = String(this.maxMessageId)
    this.messages.push(newMessage)
    this.storeMessage();
  }

  storeMessage(){
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('https://breakingdawn-17210.firebaseio.com/messages.json',
      JSON.stringify(this.messages),
      {headers: headers});
  }

  initMessage(){
    this.http.get('https://breakingdawn-17210.firebaseio.com/messages.json')
      .map((response: Response) => response.json())
      .subscribe(
        (returnMessage: Message[]) => {
          this.messages = returnMessage;
          this.messageListChangedEvent.next(this.messages);
          this.maxMessageId = this.getMaxId();
        }
      );
  }

  getMaxId(): number {
    let maxId: number = 0;
    for (let message of this.messages){
      let currentID: number = parseInt(message.id);
      if (currentID > maxId) {
        maxId = currentID
      }
    }
    return maxId
  }

  constructor(private http: Http, ) {
    this.initMessage();
  }

}
