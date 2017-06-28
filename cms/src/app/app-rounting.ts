import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentComponent } from './document/document.component';
import { MessagesComponent } from './messages/messages.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { ContactsComponent } from './contacts/contacts.component';
import {DocumentEditComponent} from "./document/document-edit/document-edit.component";
import {DocumentDetailComponent} from "./document/document-detail/document-detail.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/document', pathMatch: 'full' },
  { path: 'document', component: DocumentComponent, children: [
    { path: 'new', component: DocumentEditComponent },
    { path: ':id', component: DocumentDetailComponent },
    { path: ':id/edit', component: DocumentEditComponent },
  ] },
    { path: 'messages', component: MessagesComponent },
    { path: 'contacts', component: ContactsComponent, children: [
  { path: 'new', component: ContactEditComponent },
  { path: ':id', component: ContactDetailsComponent },
  { path: ':id/edit', component: ContactEditComponent },
] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}