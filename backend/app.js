const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { randomBytes } = require("crypto")
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const { ValidationError } = require("sequelize");
const routes = require("./routes");
const { environment } = require("./config");
const isProduction = environment === "production";

const app = express();

app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Security Middleware
if (!isProduction) {
  app.use(cors());
}
// helmet helps set a variety of headers to better secure your app
app.use(helmet({ contentSecurityPolicy: false }));

// Set the _csrf token and create req.csrfToken method
const csrf = (req, _res, next) => {
  req.csrfToken = () => {
    return randomBytes(100).toString("base64")
  }
  next()
}
app.use(csrf)

app.use(routes);

app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

app.use((err, _req, _res, next) => {
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = "Validation error";
  };
  next(err)
});

app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;
