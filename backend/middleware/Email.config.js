const nodemailer = require("nodemailer");
 const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "agarwalvaibhavknp@gmail.com",
    pass: "honk bqho jqrx aatw",
  },
});

module.exports= transporter;