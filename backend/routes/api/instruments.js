const express = require("express");
const asyncHandler = require("express-async-handler");
const NodeGeocoder = require("node-geocoder");
const { User, Owner, Rental, Review, Family, Instrument, Image } = require("../../db/models");

const router = express.Router();

router.get("/:id", asyncHandler(async (req, res) => {
  const pk = req.params.id;
  const instrument = await Instrument.findByPk(pk, {
    include: [Review, Family, Image, Rental, Owner, User]
  });

  return res.json({ instrument })
}));

router.get("/:id/reviews", asyncHandler(async (req, res) => {
  const instrumentId = req.params.id;
  const reviews = await Review.findAll({
    where: { instrumentId },
    include: User
  });

  return res.json({ reviews });
}))

router.post("/:id/rental", asyncHandler(async (req, res) => {
  const { userId, instrumentId, rentalStartDate, rentalEndDate } = req.body;

  const rental = await Rental.create({
    userId,
    instrumentId,
    rentalStartDate,
    rentalEndDate
  });

  return res.json({ rental })
}))


module.exports = router;
