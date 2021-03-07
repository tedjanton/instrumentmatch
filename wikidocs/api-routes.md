### API Routes

## Index
* ```GET /``` - populate all instruments

## Sessions
User authorization
* ```GET /api/session``` - get/restore current session
* ```POST /api/session``` - login user via credentials
* ```DELETE /api/session``` - logout user/clear session user

## Users
* ``` POST /api/users``` - signup/create new user
* ``` GET /api/users/:id/rentals``` - get rentals for signed in user

## Instruments
* ```GET /api/instruments``` - get all instruments
* ```GET /api/instruments/:id - get single instrument

## Rentals
* ```GET /api/myrentals``` - view rentals for specific user
* ```POST /api/instruments/:id/rental"``` - book a new rental
* ```DELETE /api/rentals/:id``` - delete a rental

## Reviews
* ```GET /api/instruments/:id/reviews"``` - retrieve all reviews for an instrument
* ```POST /api/addreview``` - post a review for an instrument
* ```DELETE /api/reviews/:id``` - delete a review for an instrument
