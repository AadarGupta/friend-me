// Import components and routers
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Import the contact, raw contact model and get contacts API service
import { Contact } from '../model/contact';
import { GetContactsService } from '../get-contacts.service';
import { RawContact } from '../model/rawContact';
import { RawData } from '../model/rawData';

@Component({
  selector: 'contact-display',
  templateUrl: './contact-display.component.html',
  styleUrls: ['./contact-display.component.css'],
})
export class ContactDisplayComponent {
  // Initializes an array for the current contacts, previous contacts and a page number
  allContacts: Array<Contact[]> = [];
  //prevContacts: Contact[] = [];
  pageNum: number = 1;

  // Starts by constructing the initial data (10 contacts)
  constructor(private user: GetContactsService, private router: Router) {
    this.getAPIData();
  }

  // Creates contacts using the data from API and adds to the array
  getAPIData(): void {
    // Gets the user data
    this.user.getData(this.pageNum).subscribe((data: RawData) => {
      // Maps the raw data object to the contact object
      console.log(data);
      this.allContacts.push(
        // Maps each raw data to a contact object
        data['results'].map(function (rawContact: RawContact): Contact {
          // Returns a contact
          return {
            title: rawContact.name.title,
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
        })
      );
    });
  }

  // Loads data if it doesn't exist (previously visited)
  loadData() {
    if (this.allContacts.length < this.pageNum) {
      this.getAPIData();
    }
  }

  // Switches pages to the next page
  nextPage() {
    // Increments the page number and loads data
    this.pageNum++;
    this.loadData();
  }

  // Only switches to a previous page, if it can go back
  prevPage() {
    // If the current page is greater than the first page
    if (this.pageNum > 1) {
      // Decrement page number and loads data
      this.pageNum--;
      this.loadData();
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
