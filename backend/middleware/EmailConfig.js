const nodemailer = require("nodemailer");
 const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "agarwalvaibhavknp@gmail.com",
    pass: "type your key ",
  },
});

module.exports= {transporter};
