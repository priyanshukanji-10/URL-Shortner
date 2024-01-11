const express = require("express");
const { handleRedirectUrl } = require("../controllers/redirect");
const Router = express.Router();

Router.get("/", handleRedirectUrl);

module.exports = Router;
