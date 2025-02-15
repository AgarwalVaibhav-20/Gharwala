const nodemailer = require("nodemailer");

const sendMail= async(req , res)=>{
    let testAccount = await nodemailer.createTestAccount();

    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: 'landen.nicolas8@ethereal.email',
        pass: 'VnYeWf5Nb5SxK2hkJX'
        }
    })

    let info = await transporter.sendMail({
        from: '"vaibhav agarwal👻" <gharwala.com>', // sender address
    to: "vaibhavagarwal499@gmail.com", // list of receivers
    subject: "Hello  developer", // Subject line
    text: "Hello develope?", // plain text body
    html: "<b>Hello fullstack developer?</b>", // html body
    })

    console.log("Message sent: %s", info.messageId);
    res.send(info)
}


module.exports ={
    sendMail
}