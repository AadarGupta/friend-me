// Imports component, event emitters and input and output
import { Component, EventEmitter, Input, Output } from '@angular/core';

// Imports contact model
import { Contact } from '../model/contact';

@Component({
  selector: 'contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css'],
})
export class ContactCardComponent {
  // Takes input as a Contact type
  @Input({ required: true }) contact: Contact;
  // Emits an event of contact as selected contact
  @Output('contactSelected') emitContact = new EventEmitter<Contact>();

  contactView() {
    // Emits the current contact
    this.emitContact.emit(this.contact);
  }
}
