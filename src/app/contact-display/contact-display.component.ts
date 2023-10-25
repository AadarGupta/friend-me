import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Contact } from '../model/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'contact-display',
  templateUrl: './contact-display.component.html',
  styleUrls: ['./contact-display.component.css'],
})
export class ContactDisplayComponent {
  // Initializes an array for the current contacts, previous contacts and a page number
  allContacts: Contact[] = [];
  prevContacts: Contact[] = [];
  pageNum: number = 1;

  // Starts by constructing the initial data (10 contacts)
  constructor(private user: UsersService, private router: Router) {
    this.getAPIData();
  }

  // Creates contacts using the data from API and adds to the array
  getAPIData(): void {
    // Gets the user data
    this.user.getData(this.pageNum).subscribe((data) => {
      // Loops through the data received
      for (let i = 0; i < data['results'].length; i++) {
        // Maps the raw data object to the contact object
        let rawContact: any = data['results'][i];
        let newContact: Contact = {
          first: rawContact.name.first,
          last: rawContact.name.last,
          phone: rawContact.phone,
          cell: rawContact.cell,
          email: rawContact.email,
          dob: rawContact.dob.date,
          picture: rawContact.picture.large,
          country: rawContact.location.country,
          id: rawContact.id.value,
        };
        // Add the contact to the current contacts
        this.allContacts.push(newContact);
      }
    });
  }

  // Switches pages to the next page
  nextPage() {
    // Increments the page number
    this.pageNum++;
    // Saves last 10 loaded contacts to previous contacts
    this.prevContacts = [
      ...this.prevContacts,
      ...this.allContacts.splice(
        this.allContacts.length - 10,
        this.allContacts.length
      ),
    ];
    // Removes the last 10 contacts
    this.allContacts.splice(0, this.allContacts.length - 10);
    // Gets the next 10 contacts available
    this.getAPIData();
  }

  // Only switches to a previous page, if it can go back
  prevPage() {
    // If the current page is greater than the first page
    if (this.pageNum > 1) {
      // Decrement page number
      this.pageNum--;
      // Add the previously loaded contacts back to the current contacts
      this.allContacts = [
        ...this.allContacts,
        ...this.prevContacts.splice(
          this.prevContacts.length - 10,
          this.prevContacts.length
        ),
      ];
    } else {
      // Alerts if user is on the first page
      alert('You are on the first page, cannot load more data!');
    }
  }

  // If the contact is clicked
  onContactSelected(contact: Contact) {
    // Navigate to the page using the id or the first and last name and pass the contact as parameters
    this.router.navigate(
      ['/contact-page', contact.id || contact.first + '-' + contact.last],
      {
        queryParams: contact,
      }
    );
  }
}
