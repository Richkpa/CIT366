import { Pipe, PipeTransform } from '@angular/core';
import {Contact} from "./contact.model";

@Pipe({
  name: 'contactsFilterPipe'
})
export class ContactsFilterPipe implements PipeTransform {


  transform(contacts: any, [term]): any {
   let filteredArray: Contact[] = [];

    if (contacts === null || contacts === undefined && term === null || term === undefined) {
      return contacts;
    }

   filteredArray = contacts.filter(
     (contact: any) => contact.name.toLowerCase().includes(term.toLowerCase())
   );

   if (filteredArray.length < 1) {
     return filteredArray;
   }

   return contacts;
  }

}
