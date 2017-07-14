import { Component, OnInit } from '@angular/core';
import {Contact} from "../contact.model";
import {ContactService} from "../contact.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'cms-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  invalidGroupContact: boolean;
  contact: Contact = null;
  groupContacts: Contact[] = [];
  editMode: boolean = false;
  hasGroup: boolean = false;
  id: string;


  constructor(private contactService: ContactService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];

          if (this.id === undefined || this.id === null) {
            this.editMode = false;
            return
          }

          this.contact = this.contactService.getContact(this.id);
          if (this.contact === undefined || this.contact === null ){
            return
          }
          this.editMode = true;
          this.contact = JSON.parse(JSON.stringify(this.contact));
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    let newContact = null;
    if (this.editMode) {
      newContact = new Contact(String(this.contactService.maxContactId++), value.contactName, value.contactEmail, value.contactPhone, value.contactUrl, []);
      this.contactService.addContact(newContact);
      this.contactService.updateContact(this.contact, newContact)
    }
    else {
      newContact = new Contact('', value.contactName, value.contactEmail, value.contactPhone, value.contactUrl, []);
      this.contactService.addContact(newContact)
    }
    this.router.navigate(["/contacts"]);
  }

  onCancel() {
    this.contactService.deleteContact(this.contact)
    this.router.navigate(["/contacts"]);
  }

  isInvalidContact(newContact: Contact) {
    if (!newContact) { // newContact has no value
      return true;
    }
    if (newContact.id === this.contact.id) {
      return true;
    }

    for (let i = 0; i < this.groupContacts.length; i++) {
      if (newContact.id === this.groupContacts[i].id) {
        return true;
      }
    }
    return false;
  }

  addToGroup($event: any) {
    let selectedContact: Contact = $event.dragData;
    this.invalidGroupContact = this.isInvalidContact(selectedContact);
    if (this.invalidGroupContact){
      return;
    }
    this.groupContacts.push(selectedContact);
    this.invalidGroupContact = false;
  }

  onRemoveItem(idx: number){
    if (idx < 0 || idx >= this.groupContacts.length) {
      return;
    }
      this.groupContacts.splice(idx, 1)
      this.invalidGroupContact = false;

  }
}
