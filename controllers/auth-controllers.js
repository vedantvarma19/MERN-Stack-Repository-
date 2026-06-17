const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

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

    // hash password 

    // const saltRound = 10 ; 
    // const hash_Password = await bcrypt.hash(password , saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password
    });

    console.log(userCreated);

    res.status(200).json({ message: "User Created !" });
  } catch (error) {
    console.log("ERROR =>", error);

    res.status(500).json({
        success: false,
        message: error.message,
    });

  }
};

module.exports = { home, register };
