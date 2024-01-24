const express = require("express");
const Router = express.Router();
const {
  handleRenderHomePage,
  handleRenderSignupPage,
  handleRenderLoginPage,
} = require("../controllers/staticRoute");

Router.get("/", handleRenderHomePage);
Router.get("/signup", handleRenderSignupPage);
Router.get("/login", handleRenderLoginPage);

module.exports = Router;
