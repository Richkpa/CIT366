import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';
import { DocumentComponent} from './document/document.component'
import { DocumentListComponent } from './document/document-list/document-list.component';
import { DocumentItemComponent } from './document/document-item/document-item.component';
import { DocumentDetailComponent } from './document/document-detail/document-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageItemComponent } from './messages/message-item/message-item.component';
import { MessageEditComponent } from './messages/message-edit/message-edit.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { DropdowmDirective } from './dropdowm.directive';
import {ContactService} from "./contacts/contact.service";
import {AppRoutingModule} from "./app-rounting";
import { DocumentViewComponent } from './document/document-view/document-view.component';
import { DocumentEditComponent } from './document/document-edit/document-edit.component';
import { WindRefService } from  './wind-ref.service';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactItemComponent,
    DocumentComponent,
    DocumentListComponent,
    DocumentItemComponent,
    DocumentDetailComponent,
    MessagesComponent,
    MessageItemComponent,
    MessageEditComponent,
    MessageListComponent,
    DropdowmDirective,
    DocumentViewComponent,
    DocumentEditComponent,
    ContactEditComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ContactService, WindRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
