const verificationEmailTepmlate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Your Verification Code</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            background-color: #f3f3f3;
            color: #333;
        }
        .email-container {
            width: 100%;
            padding: 20px 0;
            text-align: center;
        }
        .email-content {
            width: 600px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            padding: 40px;
            margin: auto;
            text-align: center;
        }
        .email-header img {
            width: 150px;
            max-width: 100%;
        }
        .email-title {
            font-size: 24px;
            color: #232f3e;
            font-weight: bold;
            margin-top: 20px;
        }
        .email-body {
            font-size: 16px;
            color: #333;
            line-height: 1.6;
            margin: 20px 0;
        }
        .verification-code {
            font-family: 'Courier New', monospace;
            font-size: 32px;
            font-weight: bold;
            letter-spacing: 4px;
            color: #232f3e;
            padding: 15px 20px;
            background-color: #f8f9fa;
            display: inline-block;
            border-radius: 5px;
            margin: 20px 0;
        }
        .footer {
            font-size: 12px;
            color: #555;
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 0 0 8px 8px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-content">
            <div class="email-header">
                <img src="https://yourdomain.com/logo.png" alt="Company Logo">
            </div>
            <h1 class="email-title">Verify Your Account</h1>
            <p class="email-body">Dear {fullname},</p>
            <p class="email-body">Thank you for signing up with <strong>Gharwala</strong>. To complete your registration, please enter the verification code below:</p>
            <div class="verification-code">{verificationCode}</div>
            <p class="email-body">This code will expire in <strong>24 hours</strong>. If you didn’t request this, please ignore this email.</p>
            <p class="email-body">For any assistance, contact our support team at <a href="mailto:{support_email}" style="color:#007185; text-decoration: none;">{support_email}</a>.</p>
        </div>
        <div class="footer">
            <p>© ${new Date().getFullYear()} {company_name}. All rights reserved.</p>
        </div>
    </div>
</body>
</html>

`;

const welcomeEmailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Email</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            background-color: #fff;
            padding: 20px;
            margin: 0 auto;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #007bff;
            padding: 10px;
            text-align: center;
            color: #fff;
        }
        .content {
            margin-top: 20px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
        }
        .footer {
            margin-top: 20px;
            text-align: center;
            font-size: 12px;
            color: #888;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to [Your Company]</h1>
        </div>
        <div class="content">
            <p>Hello {fullname},</p>
            <p>We are thrilled to have you with us! Here at [Your Company], we are dedicated to providing the best experience for you.</p>
            <p>If you have any questions or need assistance, feel free to reach out to us at any time. We are here to help!</p>
            <a href="[Link to Get Started]" class="button">Get Started</a>
        </div>
        <div class="footer">
            <p>Thank you for choosing Gharwala.</p>
            <p>&copy ${new Date().getFullYear()} 2025 Your Company. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;

(module.exports = verificationEmailTepmlate), welcomeEmailTemplate;
