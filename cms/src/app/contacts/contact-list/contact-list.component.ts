import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact.model';
import {ContactService} from "../contact.service";
import {MOCKCONTACTS} from "../MOCKCONTACTS";


@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

 contacts: Contact[] = [];

  constructor(private contactService: ContactService) {
    this.contacts = this.contactService.getContacts();
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.contactService.contactChangedEvent
      .subscribe(
        (contact: Contact[]) => {
          this.contacts = contact;
        }
      );
  }

}

