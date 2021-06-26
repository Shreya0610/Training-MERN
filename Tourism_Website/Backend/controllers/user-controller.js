const mongoose = require("mongoose");
const HttpError = require("../utils/http-error");

const Destination = require("../models/destinations");
const User = require("../models/user");

exports.userSignup = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  const createUser = new User({
    firstname,
    lastname,
    email,
    password,
    DateofBirth,
    MobileNumber,
  });

  try {
    await createUser.save();
    res.json({ message: "User signed up" });
  } catch (err) {
    console.log(err);
    const error = new HttpError("Signup failed", 500);
    return next(error);
  }
};

exports.userLogin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      console.log(user);
      console.info(`user with email : ${email} was found successfully`);

      if (password === user.password) {
        console.info("login successful");
        return res.status(200).send(user);
      }
      console.warn("password incorrect");
      return res.status(401).send("password incorrect");
    })

    .catch((error) => {
      console.error(`user with ${email} does not exist`);
      return res.status(404).send(`user with ${email} does not exist`);
    });
};

exports.searchDestination = (req, res) => {
  const namedestination = req.params.name;
  Destination.findOne({ name: namedestination })
    .then((destination) => {
      return res.status(200).send(destination);
    })
    .catch((err) => {
      const error = new HttpError("User not found", 200);
      throw error;
    });
};
