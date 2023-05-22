require("../models/db");
const { User } = require("../models/userSchema.js");

// Get all users

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Create a new user

const createUser = async (req, res) => {
  const appKey = req.headers.token;
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });
  try {
    if (appKey !== "qog3V4JyXXVkJX72vsdP") {
      res.status(401).json({ message: "Unauthorized" });
    } else {
      await newUser.save();
      res.json(newUser);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login a user

const loginUser = async (req, res) => {
  const appKey = req.headers.token;
  const { email, password } = req.body;
  if (appKey !== "qog3V4JyXXVkJX72vsdP") {
    res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const user = await User.findOne({ email: email });
    const { username, password: passwordFromDB, email: emailFromDB } = user;
    if (!user) {
      res.status(401).json({ message: "Invalid Email" });
    } else {
      if (password === passwordFromDB) {
        res.json({
          username,
          email: emailFromDB,
        });
      } else {
        res.status(401).json({ message: "Password is incorrect" });
      }
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllUsers, createUser, loginUser };
