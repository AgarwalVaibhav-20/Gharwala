const express = require("express");
const User = require("../models/user");
const router = express.Router();
const bcrypt = require("bcrypt");
const { SendVerificationCode} = require("../middleware/Email");

// Route to render signup page
router.get("/signup", (req, res) => {
  return res.send("Signup page"); // Adjust according to your setup
});

// Route to handle user signup
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate a random verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Create a new user instance
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      verificationCode,
      isVerified: false // Assuming new users are not verified by default
    });
    console.log(newUser);

    // Save the new user to the database
    await newUser.save();

    // Send verification code to the user's email
    SendVerificationCode(newUser.email, newUser.verificationCode, newUser.fullname);

    // Return success response with the new user's data
    return res.status(200).json(newUser);
  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
