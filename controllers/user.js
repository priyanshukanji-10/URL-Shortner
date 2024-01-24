const User = require("../models/user");
const { v4: uuid } = require("uuid");
const { setUser } = require("../services/auth");
const handleUserSignup = async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({ name, email, password });
  return res.render("home");
};
// This function handles creating new user into the database inside users collection when they request to signup in URL Shortner application.
const handleUserLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = User.findOne({ email, password });
  if (!user) {
    return res.render("login", { error: "Invalid Username or Password" });
  }
  const sessionId = uuid();
  setUser(sessionId, user);
  res.cookie("uid", sessionId);
  return res.redirect("/");
};
// This function handles log in users search into the database and if found then login that certain user.

module.exports = { handleUserSignup, handleUserLogin };
