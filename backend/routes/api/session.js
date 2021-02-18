const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { handleValidationErrors } = require("../../utils/validation");
const { User } = require("../../db/models");

const router = express.Router();

const validateLogin = [
  check("credential")
  .exists({ checkFalsy: true })
  .notEmpty()
  .withMessage("Please provide a valid email or username."),
  check("password")
  .exists({ checkFalsy: true })
  .withMessage("Please provide a password."),
  handleValidationErrors
];

router.post("/", validateLogin, asyncHandler(async (req, res, next) => {
  const { credential, password } = req.body;

  const user = await User.login({ credential, password });

  if (!user) {
    const err = new Error("Login failed");
    err.status = 401;
    err.title = "Login failed";
    err.errors = ["The provided credientials were invalid."];
    return next(err);
  }

  await setTokenCookie(res, user);

  return res.json({ user });
}));

// fetch('/api/session', {
//   method: 'POST',
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": `edTkDP2Q-LEVKNwjT05MqnW5QWVAHNlEsHEI`
//   },
//   body: JSON.stringify({ credential: 'Demo-lition', password: 'password' })
// }).then(res => res.json()).then(data => console.log(data));

router.delete("/", (_req, res) => {
  res.clearCookie("token");
  return res.json({ message: "success" })
})

// fetch('/api/session', {
//   method: 'DELETE',
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": `edTkDP2Q-LEVKNwjT05MqnW5QWVAHNlEsHEI`
//   }
// }).then(res => res.json()).then(data => console.log(data));

router.get("/", restoreUser, (req, res) => {
  const { user } = req;
  if (user) {
    return res.json({
      user: user.toSafeObject()
    });
  } else return res.json({})
})

module.exports = router;
