const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Rental, Review, Family, Instrument, Image } = require("../../db/models");

const router = express.Router();

router.get("/:id", asyncHandler(async (req, res) => {
  const pk = req.params.id;
  const instrument = await Instrument.findByPk(pk, {
    include: [Review, Family, Image, Rental]
  });

  return res.json({ instrument })
}))


module.exports = router;
