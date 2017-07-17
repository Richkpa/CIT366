import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { Http, Response, Headers } from '@angular/http';
import  { MOCKCONTACTS } from './MOCKCONTACTS';
import { Subject } from 'rxjs/Subject'
import 'rxjs/Rx';

@Injectable()
export class ContactService {
  contactListChangedEvent = new Subject<Contact[]>();
  contactsSelected = new Subject<Contact>();
  contactChangedEvent = new EventEmitter<Contact>();

  public maxContactId: number;
  private contacts: Contact[] = [];
  currentContact: Contact = null;

  getContacts() {
    return this.contacts.slice();
  }

  storeContacts(){
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('https://breakingdawn-17210.firebaseio.com/contacts.json',
      JSON.stringify(this.contacts),
      {headers: headers});
  }

  initContacts(){
    return this.http.get('https://breakingdawn-17210.firebaseio.com/contacts.json')
      .map((response: Response) => response.json())
      .subscribe(
        (returnContact: Contact[]) => {
          this.contacts = returnContact;
          this.contactListChangedEvent.next(this.contacts);
          this.maxContactId = this.getMaxId();
        }
      );
  }

  getContact(id: string): Contact {
    for (let contacts of this.contacts)
          if (contacts.id === id)
            return contacts;
  return null;
  }


  deleteContact(contact: Contact) {
    if (contact === undefined || contact === null) {
      return;
    }
    const pos = this.contacts.indexOf(contact);
    if (pos < 0) {
      return;
    }
    this.contacts = this.contacts.splice(pos, 1)
    this.storeContacts();
  }

  getMaxId(): number {
    let maxId: number = 0;
    for (let contact of this.contacts){
      let currentID: number = parseInt(contact.id);
      if (currentID > maxId) {
        maxId = currentID
      }
    }
    return maxId
  }

  addContact(newContact: Contact){
    if (newContact === undefined || newContact === null) {
      return
    }

    this.maxContactId++
    newContact.id = String(this.maxContactId)
    // this.maxContactId = parseInt(newContact.name)
    this.contacts.push(newContact)
    this.storeContacts();
  }

  updateContact(originalContact: Contact,
                newContact: Contact){
    if (originalContact || newContact === undefined || originalContact || newContact === null) {
      return
    }
    const pos = this.contacts.indexOf(originalContact)
    if (pos < 0 ) {
      return
    }
    newContact.id = originalContact.id
    this.contacts[pos] = newContact
    this.storeContacts();
  }

  constructor(private http: Http, ) {
    this.initContacts();
  }

}
