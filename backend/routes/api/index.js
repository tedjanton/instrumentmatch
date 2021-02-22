const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const sessionRouter = require("./session");
const usersRouter = require("./users");
const instrumentsRouter = require("./instruments");
const { Instrument } = require("../../db/models");

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/instruments", instrumentsRouter);

router.get("/", asyncHandler(async (_req, res) => {
  const instruments = await Instrument.findAll({
    order: ["createdAt", "DESC"]
  });

  res.json({ instruments });
  
}))

module.exports = router;









// TESTS
// const router = require("express").Router();


// // testing getting the demo user from the db and calling setTokenCookie
// const asyncHandler = require("express-async-handler");
// const { setTokenCookie } = require("../../utils/auth");
// const { User } = require("../../db/models");

// router.get("/set-token-cookie", asyncHandler(async (req, res) => {
//   const user = await User.findOne({
//     where: {
//       username: "Demo-lition"
//     }
//   })
//   setTokenCookie(res, user);
//   return res.json({ user })
// }));



// // testing restoreUser middleware by connecting the middleware and checking
// // whether or not the req.user key has been populated by the middleware
// const { restoreUser } = require("../../utils/auth");
// router.get("/restore-user", restoreUser, (req, res) => {
//   return res.json(req.user);
// });


// // testing requireAuth middleware that will return and error if there is no session user, otherwise return the session user's information
// const { requireAuth } = require("../../utils/auth");
// router.get("/require-auth", requireAuth, (req, res) => {
//   return res.json(req.user);
// })




// // testing API router with a post fetch
// router.post("/test", (req, res) => {
//   res.json({ requireBody: req.body })
// });

// // TEST FETCH FOR ABOVE ROUTE(in dev tools)
// /* fetch('/api/test', {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": "e3Ibksf2-ny0mubQyz4BEL_ohnez0KJtJznA"
//   },
//   body: JSON.stringify({ hello: 'world' })
// }).then(res => res.json()).then(data => console.log(data));
// */


// module.exports = router;
