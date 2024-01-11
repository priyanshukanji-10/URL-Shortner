const express = require("express");
const { handleGenerateShortId } = require("../controllers/url");

const Router = express.Router();

Router.post("/", handleGenerateShortId);

module.exports = Router;
