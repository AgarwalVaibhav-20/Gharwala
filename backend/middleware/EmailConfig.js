const nodemailer = require("nodemailer");
 const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "agarwalvaibhavknp@gmail.com",
    pass: "honk bqho jqrx aatw",
  },
});

module.exports= {transporter};