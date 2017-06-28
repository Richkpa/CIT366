import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service'
import { WindRefService } from '../../wind-ref.service'

@Component({
  selector: 'cms-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;
  nativeWindow: any;
  id: string;

  constructor(private contactService: ContactService,
              private windRefService: WindRefService,
              private router: Router,
              private route: ActivatedRoute) {
    this.nativeWindow = windRefService.getNativeWindow();
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.contact = this.contactService.getContact(this.id);
        }
      );

  }
  onDelete() {
    this.contactService.deleteContact(this.contact)
    this.router.navigate(["/contacts"]);
  }

}
