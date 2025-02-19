const express = require("express");
const router = express.Router();
const { welcomeEmail } = require("../middleware/Email");
const User = require("../models/user");

router.post("/verify-email", async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ success: false, message: "OTP is required" });
    }

    const user = await User.findOne({ verificationCode: code });

    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    console.log("Verifying OTP for:", user.email, "Entered OTP:", code);

    // Updating user verification status
    const updatedUser = await User.findOneAndUpdate(
      { _id: user._id },
      { $set: { isVerified: true }, $unset: { verificationCode: 1 } },
      { new: true, select: "_id isVerified" }
    );

    if (!updatedUser) {
      return res.status(400).json({ success: false, message: "Unable to verify user" });
    }

    // Send a welcome email
    await welcomeEmail(user.email, user.fullname);

    return res.status(200).json({ success: true, message: "Email Verified Successfully" });

  } catch (error) {
    console.error("Error verifying email:", error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;
