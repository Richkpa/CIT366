import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contacts: Contact[] = [
    new Contact('1', 'Bro. Jackson', 'jacksonk@byui.edu', 208-496-3771,
      'https://web.byui.edu/Directory/Employee/jacksonk.jpg', null),

  ];

  constructor() { }

  ngOnInit() {
  }

}
