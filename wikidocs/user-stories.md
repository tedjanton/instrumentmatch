# Sign Up
As a user without a profile, I want to be able to create an account via a form, so that I can have full access to the website.

## Questions

### How does a user create an account?
* User will enter a username, first name, last name, email address, and password to create an account

### Will we confirm their password when they sign up?
* User will need to re-enter their password in a "confirm password" field

### What routes should we use for account creation?
- Sign up route will be "/login"

### Where should the user be redirected after account creation?
- User will be redirected to the the home page at "/"

### Will we allow OAuth authentication via a third party?
- Not yet -- maybe in a future story

### What happens if the username already exists in the database?
- Display the message "Username is already in use. Please try again."

### What happens if the email address already exists in the database?
- Display the message "Email address is already in use. Please try again."

### Should logging in use session-based or use token-based authentication?
- We will use token-based auth for now

## Acceptance Criteria
### Given that I'm a new user and
* When I'm on the /login route
* Then there will be a create account form with a username, email and password field and a "Sign Up" button to submit the form.

### When I try to fill out the form with a duplicate username and press Enter or press the "Sign Up" button
* Then at the top of the form, I will see a red message displaying "Username is already in use. Please try again."

### When I try to fill out the form with a duplicate email and press Enter or press the "Sign Up" button
* Then at the top of the form, I will see a red message displaying "Email is already in use. Please try again."

### When I try to fill out the form with a valid username, email, and password and press Enter or press the "Sign Up" button
* Then I will be redirected to the homepage at "/"

### Given that I am a logged-in new user
* When I refresh the homepage at the / route
* Then I will still be logged in

### Given that I am a logged-out new user
* When I try to navigate to the homepage at the / route
* Then I will be redirected to the /login route


# Log In
As an unauthorized user, I want to be able to login to the website via a form, so that I can access my private information.

## Questions
### Will the user enter a username or an email address to login?
* User will login via email and password

### What routes should we use for login?
* User will login via /login route

### Where should the user be redirected after login?
* User will be redirected to the "/" homepage

### Will we allow OAuth authentication via a third party?
Not yet -- maybe in a future story

### What happens if the user doesn't exist yet?
* Display the message Invalid Login :( please try again.

### What happens if the user enters the wrong password?
* Display the message Invalid Login :( please try again.

### Should logging in use session-based or use token-based authentication?
* We will use token-based auth for now

## Acceptance Criteria
### Given that I'm a logged-out user and
* When I'm on the /login route
* Then there will be a login form with an email and password field and a "Log In" button to submit the form.

### When I try to fill out the form with an invalid email and password combination and press Enter or press the "Login" button
* Then at the top of the form, I will see a red message Invalid Login :( please try again.

### When I try to fill out the form with an email that doesn't exist in the system and press Enter or press the "Login" button
* Then at the top of the form, I will see a red message Invalid Login :( please try again.

### When I try to fill out the form with a valid email and password and press press Enter or press the "Log In" button
* Then I will be redirected to the homepage at the / route.

### Given that I am a logged-in user
* When I refresh the homepage at the / route
* Then I will still be logged in

### Given that I am a logged-out user
* When I try to navigate to the homepage at the / route
* Then I will be redirected to the /login route



# Demo User
As a first-time user who just wants to demo InstrumentMatch, I want to be able to try out the site with a demo user login via a single button click on the login and signup form, so that I can access all features of InstrumentMatch without having to go through the trouble of creating a new account.
## Questions
### Will the user be able to have access the site without creating an account?
* Users can click on demo login button to access site without creating an account.
### Will the demo user have all functionality of a normal, logged in user?
* Users will be able to interact with the site as a normal, logged in user would.

## Acceptance Criteria
### Given that I am a user without an account and want to access InstrumentMatch
* When I am redirected to the login page
* Then I will be able to click on the "Demo User" button to access the site without creating an account.
### Given that I am a demo user and have logged in as a demo user
* When I try to do everything that a normal user can do
* Then I will be able to complete those actions.



# Logout
As a logged-in user, I want to logout via a button on the navigation bar, so that I can hide my account information to the rest of the users on this device.
## Questions
### Will users be able to log out anywhere on the site?
* Users will be able to logout along any route via a button in the navigation bar.
### How will the user be able to logout successfully?
* Users will be have the ability to click on a button in the navigation bar to successfully log out.
### Where will the user be redirected after they have logged out?
* Users will be redirected to the login page on the "/login" route

## Acceptance Criteria
### Given that I am a logged-in user and
* When I am on any route and want to log out of my account
* Then there will be a navigation bar with a log out button
### When I click on the logout button
* Then I will be redirected to the "/login" route and successfully logged out of my account.


# Browse Available Instrument Rentals
As any user, I want to be able to view all instruments available in my area, so that I can see if anything matches what I am looking within my time frame.

## Questions
### Where would a user go to see instruments in their area?
* User would go to the "/instruments" route to see a grid of all instruments around their location.

### If a user is not already at the "/instruments" route, how would they see all instruments?
* User would click on the "explore instruments close by" button that would redirect them to the /instruments route, or type a query into the search bar

### How are all of the instruments presented to the user?
* The games at the "/instruments" route will be presented in a grid that scrolls on the left hand side with an interactive map with markers on the right

# View My Instrument Rentals
As a logged-in user, I want to be able to view my instrument rentals, so that I can see what I have rented/currently renting.

## Questions
### Where can a user go to view their rentals from any path?
* Users can click on a "My Rentals" button in the nav bar on any page and be redirected to "/myrentals"

# Book a Rental
As a logged-in user, I want to be able to view instrument availability, so that I can book a rental for a specified time period.

## Questions
### How can a user book a rental?
* From the selected instrument page (/instruments/:id), a user can view availability and pricing.
* After selecting available dates, a user presses "Confirm Rental" button, an alert pops up asking if they are sure, then they confirm and are redirected to their /myrentals page to view their new rental listed.


# Add an Instrument Review
As a logged-in user that is currently viewing their rentals (/myrentals), I want to leave a rating and review, so that I can recommend or not recommend an instrument to other users.

## Questions
### How would a user give a review to a game?
* Users would click on a button next to the instrument rental they would like to review, a modal will pop up with a form to leave a review and to rate the instrument 1 - 5 music notes

# View Reviews Given
As logged-in user, I want to be able to see the overall rating for an instrument, so that I know how others feel about an instrument.

## Questions
### How would a user view an instrument rating?
* On the /instruments page, all instruments will have their rating next to their title.
* On an instrument detail page /instrument/:id, the rating will be present next to the game title.
* On an instrument detail page /instrument/:id, the reviews for that instrument will be present.

