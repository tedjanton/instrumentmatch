const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { handleValidationErrors } = require("../../utils/validation");
const { User, Rental, Instrument, Image, Review } = require("../../db/models");

const router = express.Router();

const validateSignup = [
  check("email")
  .exists({ checkFalse: true })
  .isEmail()
  .withMessage("Please provide a valid email."),
  check("username")
  .exists({ checkFalsy: true })
  .isLength({ min: 4 })
  .withMessage("Please provide a username with at least 4 characters."),
  check("username")
  .not()
  .isEmail()
  .withMessage("Username cannot be an email."),
  check("password")
  .exists({ checkFalsy: true })
  .isLength({ min: 6 })
  .withMessage("Password must be 6 characters or more."),
  handleValidationErrors
]

router.post("/", validateSignup, asyncHandler(async (req, res) => {
  const { username, firstName, lastName, email, password } = req.body;
  const user = await User.signup({ username, firstName, lastName, email, password });

  await setTokenCookie(res, user);

  return res.json({ user });
}));

router.get("/:id/rentals", asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const myRentals = await Rental.findAll({
    where: { userId },
    include: [{
      model: Instrument,
        include: [ Image ]}]
  });

  return res.json({ myRentals });
}));

module.exports = router;
