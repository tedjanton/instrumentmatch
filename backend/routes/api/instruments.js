const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Owner, Rental, Review, Family, Instrument, Image } = require("../../db/models");

const router = express.Router();

router.get("/:id", asyncHandler(async (req, res) => {
  const pk = req.params.id;
  const instrument = await Instrument.findByPk(pk, {
    include: [Review, Family, Image, Rental, Owner, User]
  });

  return res.json({ instrument })
}))


module.exports = router;
