<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/tedjanton/instrumentmatch">
    <img src="frontend/src/images/favicon_io/android-chrome-512x512.png" alt="Logo" width="80" height="80" style="background-color:white">
  </a>

  <h3 align="center">Instrument Match</h3>

  <p align="center">
    Instrument Match is a unique take on AirBnB for the gigging musician on the go. This application includes a rental and booking database for any musical instrument you might want to...or need to rent! You can browse instruments via search by instrument family, name, and location (with a Google Maps API integration). Users can make sure they are getting a great, reliable instrument before they rent by reading reviews, viewing when it was last serviced, and seeing each instrument's average "Musical Note" 5-star rating. Once you book a rental, you can also add your own review and rating. If you decide to change you mind, you can cancel your rental as long as it is before the rental start date.
    <br />
    <a href="https://github.com/tedjanton/instrumentmatch"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://instrumentmatch.herokuapp.com/">View Site</a>
    ·
    <a href="https://github.com/tedjanton/instrumentmatch/issues">Report Bug</a>
    ·
    <a href="https://github.com/tedjanton/instrumentmatch/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[Click here to view Instrument Match live on the web!](https://instrumentmatch.herokuapp.com/)
<br>
</br>
![homepage-screenshot](site-images/homepage-ss.png)

## Overall Structure

### Back End
The app was built using Express and Sequelize on the back end with a PostgreSQL database. The backend structure is RESTful with AJAX requests that are fullfilled with a JSON API. Model associations are used to minimize database queries to the backend, assuring speed and reliability.

### Front End
The front end is built with React and Javascript while utilizing Redux architecture, producing a lightning-fast user interface and calling upon dynamically rendered components.

### Built With

* [JavaScript](https://www.javascript.com/)
* [React](https://reactjs.org/)
  - Libraries include:
    * [react-calendar](https://www.npmjs.com/package/react-calendar) for displaying rental bookings
    * [date-fns](https://date-fns.org/) for handling date-picking
    * [react-google-maps](https://www.npmjs.com/package/react-google-maps) for rendering the interactive and dynamic Google Map component
    * [react-ratings-declarative](https://www.npmjs.com/package/react-ratings-declarative) for managing instrument ratings
* [Redux](https://redux.js.org/)
* [Express](https://expressjs.com/) with [BCrypt](https://www.npmjs.com/package/bcryptjs)
* [Node.js](https://nodejs.org/en/)
* [HTML](https://html.com/)
* [CSS](http://www.css3.info/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Here is everything we need you to do to get started with Instrument Match.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/tedjanton/instrumentmatch
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Add a '.env' with your environment variables to the root of your local directory

4. Create a postgreSQL user
    ```sh
    CREATE USERS <<your username>> WITH PASSWORD <<your password>> CREATEDB
    ```
5. Create your database
    ```sh
    npx dotenv sequelize db:create
    ```
6. Migrate and seed your database
    ```sh
    npx dotenv sequelize db:migrate
    npx dotenv sequelize db:seed:all
    ```

<!-- USAGE EXAMPLES -->
## Usage
### An easy-to-use login with a pre-configured Demo User.
![Login](site-images/demo-login.gif)
### Search for instruments by family, name, or location.
![Search for Instruments](site-images/family-search.gif)
### Book a rental.
![My Rentals](site-images/my-rentals.gif)
### Leave a rating and a comment on an instrument you have rented.
![Reviews](site-images/reviews.gif)


## Obstacles

### Google Maps markers opening for mouse hover
AirBnB's interactive search map highlights the marker that a user's mouse is hovering on the left hand scroll of listings. In order to recreate this, I set local state on the instrument component to be "selected", then passed that to the Redux store.
![instrument-hover](site-images/instrumentcomponent-hover.png)

And then utilized it to change the hovered over component that match the instrument's map marker state to "clicked".
![mapcontainer-hover](site-images/mapcontainer-hover.png)

### Reaching for images with Sequelize

In order to populate images for a user's rental, I needed to write a GET route, grab the userId, and query the database with a nested "include" statement.
![api-route](site-images/api-route.png)


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/tedjanton/instrumentmatch/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- CONTACT -->
## Contact & Acknowledgements


* Ted Anton - [LinkedIn](https://www.linkedin.com/in/ted-anton/) - [GitHub](https://github.com/tedjanton)


Project Link: [https://github.com/tedjanton/instrumentmatch/](https://github.com/tedjanton/instrumentmatch/)


<!-- ACKNOWLEDGEMENTS -->
