const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVerified:{
      type:Boolean,
      default:false
    },
    verificationCode:String
  },
  { timestamps: true }
);


const User = new mongoose.model("User", userSchema);

module.exports = User;