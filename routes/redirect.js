const express = require("express");
const Router = express.Router();
const { handleRedirect } = require("../controllers/redirect");
Router.get('/:shortID',handleRedirect)

module.exports = Router;
