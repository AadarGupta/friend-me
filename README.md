# Specifications

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.

# Running Instructions

1. Ensure Node and NPM are installed
2. Install Angular CLI
3. Clone this project
4. Run 'npm i' to install all node modules
5. Run:
   - 'npm start' to start the local server
   - 'npm test' to run local tests
   - 'npm build' to build

# Approach

To complete this assessment, I used 3 main components (exlcuding the given app component) and 1 service.

Firstly, I created an API call to the data with the seed 'nuvalence'. This service is called every time (previously unloaded) data needs to be loaded.

I implemented the main screen, which shows a list of 10 contacts (names and their picture). This is data I receive from the API, which is then shown as a 'contact card' through an ngFor loop.

Then, I implemented the 'contact card' itself, which would act like the button for each individual person. The data for that particular individual, was passed as a query parameter to the individual's contact page. From here, the data that was passed in, could be used to generate a contact page for a user.

Lastly, the contact page implemented the data received and displayed the provided data.

# Features

I have implemented the required features (i.e. displaying a list of people, and accessing their name and their phone number). However, in addition to this, I have also added email and location, as well as images.

One main feature that I have implemented is a system to reduce the number of API calls, when paginating the site. I decided to use pagination and instead of calling the API for 10 contacts each time it goes forward or backward, I am storing these pre-loaded contacts in an array, with the index representing the page number. Every time, a user goes back and forth, it checks if the data has already been loaded. If so, no new data needs to be loaded and can be used from the array, it is stored in. If the data has not been loaded, it calls the API to load the data.

# Improvements

Looking back at my work, there are many features I wish I had time for: - Testing more extensively - Dark mode feature - Filter by location - Allow for loading more than 10 on a page - Perhaps find a more optimized way of calling the API - Contact form on each page to email the contact (or an automated email that would let them know that they have been contacted) - Login/Signup system => ability to save own contacts as a user

The list of the improvements can go on and on, but ideally having 3-5 more days would help. It is midterm season and therefore, time is scarce and distributed between many other tasks.
