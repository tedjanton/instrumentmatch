const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { User } = require("../../db/models");

const router = express.Router();

router.post("/", asyncHandler(async (req, res, next) => {
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


module.exports = router;


// fetch('/api/session', {
//   method: 'POST',
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": `edTkDP2Q-LEVKNwjT05MqnW5QWVAHNlEsHEI`
//   },
//   body: JSON.stringify({ credential: 'Demo-lition', password: 'password' })
// }).then(res => res.json()).then(data => console.log(data));
