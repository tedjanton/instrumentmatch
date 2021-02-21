### API Routes

## Sessions
User authorization
* ```GET /api/session``` - get/restore current session
* ```POST /api/session``` - login user via credentials
* ```DELETE /api/session``` - logout user/clear session user

## Users
* ``` POST /api/users``` - signup/create new user

## Instruments
* ```GET /api/instruments``` - get all instruments
* ```GET /api/instruments/:id - get single instrument

## Rentals
* ```GET /api/myrentals``` - view rentals for specific user
* ``DELETE /api/myrentals/:id``` - delete a rental

## Reviews
* ```GET /api/reviews``` - view reviews for an instrument
* ```POST /api/reviews``` - post a review for an instrument
* ```DELETE /api/reviews/:id``` - delete a review for an instrument
