const express = require("express");
const Router = express.Router();
const { handleRenderHomePage } = require("../controllers/staticRoute");
Router.get("/", handleRenderHomePage);
module.exports = Router;
