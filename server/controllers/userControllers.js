const { model } = require("mongoose");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const expTime = 100000 * 30;

// creates a json web token required for authentication that expires in 2 days
const generateToken = function (id) {
  return jwt.sign(
    {
      data: id,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    },
    process.env.JWS_SECRET
  );
};

module.exports.registerController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    const token = generateToken(user._id);
    res.cookie("token", token, {
      maxAge: 1000 * 60 * 30,
      httpOnly: true,
      signed: true,
    });
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
        res.cookie("token", token, {
          maxAge: 1000 * 60 * 30,
          httpOnly: true,
        });
        res.status(200).json({ loggedIn: true, user: user._id });
      } else {
        //throw Error('Invalid password');
        res.status(200).json({ loggedIn: false, err: "Invalid password" });
      }
    } else {
      res
        .status(200)
        .json({ loggedIn: false, err: "No existing account with this email" });
    }
  } catch (err) {
    console.log(err);
    res.status(200).json({ loggedIn: false, err: "error" });
  }
};

module.exports.userPageController = async (req, res, next) => {
  const userId = req.userId;
  try {
    let user = await User.findById(userId);
    if (!user) {
      console.log(`userPageController: no such user, you need to login`);
      res.json({ error: "no such a user, please login" });
    } else {
      res.json({ name: user.name, email: user.email });
    }
  } catch (err) {
    console.log(
      `userPageController: in catch part, an unexpected error occured`
    );
    res.json({ error: err });
  }
};
