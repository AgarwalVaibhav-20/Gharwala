const express = require("express");
const router = express.Router();
const { welcomeEmail } = require("../middleware/Email");
const User = require("../models/user");


router.post("/verify-email", async (req, res) => {
  try {
    const { email, code } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    
    console.log("Verifying OTP:", code);
    if(user.verificationCode != code){
      return res.status(400).json({ success: false, message: "Wrong otp" });
    }


    // user.isVerified = true;
    // user.verificationCode = undefined;
    // await user.save();

    const updatedUser = await User.findOneAndUpdate({email: email}, {$set: {isVerified: true, verificationCode: undefined}}, {new:true});

    if(!updatedUser){
      return res.status(400).json({ success: false, message: "Unable to verify user" });
    }

    await welcomeEmail(user.email, user.fullname);

    return res.status(200).json({ success: true, message: "Email Verified Successfully" });

  } catch (error) {
    console.error("Error verifying email:", error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;
