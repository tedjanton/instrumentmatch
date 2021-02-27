const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const sessionRouter = require("./session");
const usersRouter = require("./users");
const instrumentsRouter = require("./instruments");
const { Instrument, Image, Review, Family, Rental } = require("../../db/models");

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/instruments", instrumentsRouter);

router.get("/", asyncHandler(async (_req, res) => {
  const instruments = await Instrument.findAll({
    include: [Review, Image, Family],
    order: ["createdAt"]
  });

  return res.json({ instruments });
}));

router.get("/search/:id", asyncHandler(async (req, res) => {
  const instrument = await Instrument.findByPk(req.params.id, {
    include: [Review, Image, Family]
  });
  return res.json({ instrument })
}));

router.post("/addreview/:id", asyncHandler(async (req, res) => {
  const { userId, instrumentId, review, rating } = req.body;

  const newReview = await Review.create({
    userId,
    instrumentId,
    review,
    rating
  });
  return res.json({ newReview })
}))

router.post("/rental/:id", asyncHandler(async (req, res) => {
  const rental = await Rental.findByPk(req.params.id);
  console.log(rental);
  const item = rental.destroy();

  return res.json({ item });
}))


module.exports = router;
