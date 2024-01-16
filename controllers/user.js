const User = require("../models/user");
const handleUserSignup = async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({ name, email, password });
  return res.render("home");
};
const handleUserLogin = async (req, res) => {
  const { email, password } = req.body;
  // Todo:This will genarate a a cookie using uuid and will link it with a certain user to link up.....
  // Also will have to create a middleware which will restrict the users with in the signup and login page untill they login
};

module.exports = { handleUserSignup, handleUserLogin };
