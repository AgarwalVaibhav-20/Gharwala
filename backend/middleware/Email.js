const verificationEmailTemplate = require("../libs/EmailTemplates.js");
const welcomeEmailTemplate = require("../libs/EmailTemplates.js")
const { transporter } = require("./EmailConfig.js");

const SendVerificationCode = async (email, verificationCode, fullname) => {
    try {
        let emailContent = verificationEmailTemplate
            .replace("{verificationCode}", verificationCode)
            .replace("{fullname}", fullname);  // Replace both placeholders in one string

        const response = await transporter.sendMail({
            from: 'agarwalvaibhavknp@gmail.com',
            to: email,
            subject: "Verify your Email",
            text: `Verify your Email: ${verificationCode}`,  // Include code in text version
            html: emailContent,  // Pass the final email content
        });

        console.log("Email sent successfully:", response);
    } catch (error) {
        console.log("Email error:", error);
    }
};

const welcomeEmail = async (email,fullname) => {
    try {
        const response = await transporter.sendMail({
            from: 'agarwalvaibhavknp@gmail.com',
            to: email,
            subject: `Welcome ${fullname}`,
            text: `You have been signed-in with this email ${email}`,
            html: welcomeEmailTemplate.replace("{fullname}" , fullname),  // Pass the final email content
        });

        console.log("Email sent successfully:", response);
    } catch (error) {
        console.log("Email error:", error);
    }
};

module.exports = { SendVerificationCode , welcomeEmail };
