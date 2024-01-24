// This static Router enables to render static ejs page in the apllication
const URL = require("../models/url");
const handleRenderHomePage = async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", { urls: allUrls });
};
const handleRenderSignupPage = async (req, res) => {
  return res.render("signup");
};
const handleRenderLoginPage = async (req, res) => {
  return res.render("login");
};
module.exports = {
  handleRenderHomePage,
  handleRenderSignupPage,
  handleRenderLoginPage,
};
