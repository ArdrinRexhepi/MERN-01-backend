const User = require("../models/userModel");

//login user
const loginUser = async (req, res) => {
  res.json({ mssg: "Login user" });
};

//sign up user
const signupUser = async (req, res) => {
  res.json({ mssg: "Sign up user" });
};

module.exports = {
  loginUser,
  signupUser,
};
