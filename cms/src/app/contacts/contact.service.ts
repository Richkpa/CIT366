import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import  { MOCKCONTACTS } from './MOCKCONTACTS'

@Injectable()
export class ContactService {
  contactsSelected = new EventEmitter<Contact>();

  private contacts: Contact[] = [];
  currentContact: Contact = null;


  getContacts() {
    return this.contacts.slice();
  }

  getContact(id: string): Contact {
    for (let contacts of this.contacts)
          if (contacts.id === id)
            return contacts;
  return null;
  }

  constructor() {
    this.contacts = MOCKCONTACTS;
    this.currentContact = this.contacts[4]
  }

}
