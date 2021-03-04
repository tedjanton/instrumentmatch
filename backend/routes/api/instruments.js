const express = require("express");
const asyncHandler = require("express-async-handler");
const NodeGeocoder = require("node-geocoder");
const {
  User,
  Owner,
  Rental,
  Review,
  Family,
  Instrument,
  Image
} = require("../../db/models");

const router = express.Router();

// get single instrument
router.get("/:id", asyncHandler(async (req, res) => {
  const instrument = await Instrument.findByPk(req.params.id, {
    include: [Review, Family, Image, Rental, Owner, User]
  });

  return res.json({ instrument })
}));

// retrieve all reviews for a specific instrument(:id)
router.get("/:id/reviews", asyncHandler(async (req, res) => {
  const instrumentId = req.params.id;
  const reviews = await Review.findAll({
    where: { instrumentId },
    include: User
  });

  return res.json({ reviews });
}));

// book a new rental
router.post("/:id/rental", asyncHandler(async (req, res) => {
  const {
    userId,
    instrumentId,
    rentalStartDate,
    rentalEndDate
  } = req.body;
  const rental = await Rental.create({
    userId,
    instrumentId,
    rentalStartDate,
    rentalEndDate
  });

  return res.json({ rental })
}))

module.exports = router;
