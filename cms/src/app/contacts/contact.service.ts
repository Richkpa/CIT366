import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import  { MOCKCONTACTS } from './MOCKCONTACTS';
import { Subject } from 'rxjs/Subject'

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
    let contactListClone = this.contacts.slice()
    this.contactListChangedEvent.next(contactListClone);
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
    let contactListClone = this.contacts.slice()
    this.contactListChangedEvent.next(contactListClone);
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
    let contactListClone = this.contacts.slice()
    this.contactListChangedEvent.next(contactListClone);
  }

  constructor() {
    this.contacts = MOCKCONTACTS;
    this.currentContact = this.contacts[4]
    this.maxContactId = this.getMaxId();
  }

}
