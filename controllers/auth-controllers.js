const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to Vedant World from Router  ! ");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exists !" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    console.log(userCreated);

    res.status(200).json({ message: req.body });
  } catch (error) {
    res.status(400).json("Page not found ");
  }
};

module.exports = { home, register };
