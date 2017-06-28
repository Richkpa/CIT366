import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import  { MOCKCONTACTS } from './MOCKCONTACTS'

@Injectable()
export class ContactService {
  contactsSelected = new EventEmitter<Contact>();
  contactChangedEvent = new EventEmitter<Contact>();

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

   deleteContact(contact: Contact) {
    if (contact === null) {
      return;
    }
    const pos = this.contacts.indexOf(contact);
    if (pos < 0) {
      return;
    }
    this.contacts.splice(pos, 1);
    this.contactChangedEvent.emit(this.currentContact);
  }


}
