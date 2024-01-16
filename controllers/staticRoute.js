const handleRenderHomePage = (req, res) => {
  return res.render("home");
};
const handleRenderSignupPage = (req, res) => {
  return res.render("signup");
};
const handleRenderLoginPage = (req, res) => {
  return res.render("login");
};
module.exports = {
  handleRenderHomePage,
  handleRenderSignupPage,
  handleRenderLoginPage,
};
