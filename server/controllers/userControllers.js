const { model } = require("mongoose");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// creates a json web token required for authentication that expires in 2 days
const generateToken = function (id) {
  return jwt.sign({ id }, process.env.JWS_SECRET, { expiresIn: "2d" });
};

module.exports.registerController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    const token = generateToken(user._id);
    res.cookie("jwt", token, { httpOnly, expiresIn: "2d" });
    res.json({ registerFailed: false, user: user._id });
  } catch (err) {
    console.log(err);
    res.json({ registerFailed: true, err });
  }
};

module.exports.loginController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      let isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (isPasswordCorrect) {
        console.log("I am here");
        const token = generateToken(user._id);
        res.cookie('jwt',token);
        res.status(200).json({ loggedIn: true, user: user._id });
      } else {
        //throw Error('Invalid password');
        res.status(200).json({ loggedIn: false , err:"Invalid password" });
      }
    } else {
      res.status(200).json({ loggedIn: false, err:"No existing account with this email" });
    }
  } catch (err) {
    console.log(err);
    res.status(200).json({ loggedIn: false, err:'error' });
  }
};
