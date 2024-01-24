const express = require("express");
const { handleRedirect } = require("../controllers/redirect");

const Router = express.Router();

Router.get("/:shortID", handleRedirect);

module.exports = Router;
