const express = require("express");
const {
  handleGenerateShortId,
  handleGetAnalytics,
} = require("../controllers/url");

const Router = express.Router();

Router.post("/", handleGenerateShortId);
Router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = Router;
