const nodemailer = require("nodemailer");
 const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "agarwalvaibhavknp@gmail.com",
    pass: "your pass key",
  },
});

module.exports= {transporter};
