// Imports component and activated route
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Imports the contact model
import { Contact } from '../model/contact';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent {
  // Creates a contact for the page to display
  contact: Contact;

  // Creates the page from the active route
  constructor(private activeRoute: ActivatedRoute) {
    // Gets the parameters from the activated route
    this.activeRoute.queryParams.subscribe((params) => {
      // Maps a new contact based on values
      let newContact: Contact = {
        title: params['title'],
        first: params['first'],
        last: params['last'],
        phone: params['phone'],
        cell: params['cell'],
        email: params['email'],
        dob: params['dob'],
        picture: params['picture'],
        country: params['country'],
        id: params['id'],
      };
      this.contact = newContact;
    });
  }
}
