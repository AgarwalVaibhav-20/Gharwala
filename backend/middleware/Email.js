const { transporter } = require("./Email.config.js");

const SendVerificationCode = async (email, verificationCode) => {
    try {
        const response = await transporter.sendMail({
            from: '"Gharwala (yaha sab milega) 🛒" <agarwalvaibhavknp@gmail.com>',
            to: email,
            subject: "Verify your Email",
            text: "Verify your Email",
            html: verificationCode,
        });
        console.log("Email sent successfully:", response);
    } catch (error) {
        console.log("Email error:", error);
    }
};


module.exports = { SendVerificationCode };