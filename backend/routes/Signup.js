const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get("/signup", (req, res) => {
  return res.send("signup");
});

router.post("/signup", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await User.create({ fullName, email, password });

    if(!newUser) return res.status(400).json({message:"Cannot create user in db"});

    // return res.redirect("/");
    return res.status(200).json(newUser);
  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
