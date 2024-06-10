const adminModel = require("../models/adminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// signup controller
const registerController = async (req, res) => {
  try {
    const { FullName, Email, Password } = req.body;
    // Check if all required fields are provided
    if (!FullName || !Email || !Password) {
      return res
        .status(400)
        .json({ message: "FullName, Email, and Password are required." });
    }
    // checking the admin existance
    const adminExists = await adminModel.findOne({ Email });
    if (adminExists) {
      return res
        .status(400)
        .json({ message: "Admin with this email already exists" });
    }
    // hashing password
    const hashedPassword = await bcrypt.hash(Password, 10);
    const newAdmin = new adminModel({
      FullName,
      Email,
      Password: hashedPassword,
    });

    const savedAdmin = await newAdmin.save();
    res.status(201).json({
      success: true,
      message: "Admin registered succesfully",
      savedAdmin,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

// login controller
const loginController = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    if (!Email || !Password) {
      return res
        .status(401)
        .json({ success: false, message: "Email or Password is not provided" });
    }
    // check existance
    const adminExists = await adminModel.findOne({ Email });
    if (!adminExists) {
      return res
        .status(401)
        .json({ success: false, message: "No Admin exists with this email" });
    }
    // password comparision

    const match = await bcrypt.compare(Password, adminExists.Password);

    if (!match) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password" });
    }

    // token creation
    const token = await jwt.sign(
      { _id: adminExists._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: process.env.JWT_EXPIRES }
    );

    res.status(200).json({
      success: true,
      message: "Admin loggedin succesfully",
      token: token,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: "Error in logging in" });
  }
};

module.exports = { registerController, loginController };
