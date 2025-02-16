const express = require("express");
const router = express.Router();
const { welcomeEmail } = require("../middleware/Email");
const User = require("../models/user");

router.post("/verify-email", async (req, res) => {
  try {
    const { code } = req.body;
    const user = await User.findOne({ verificationCode: code });

    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid or Expired Code" });
    }

    console.log("Verifying OTP:", code);

    user.isVerified = true;
    user.verificationCode = undefined;
    await user.save();

    await welcomeEmail(user.email, user.fullname);

    return res.status(200).json({ success: true, message: "Email Verified Successfully" });

  } catch (error) {
    console.error("Error verifying email:", error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;
