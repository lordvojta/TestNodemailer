const nodemailer = require('nodemailer');

async function testEmailConnection() {
    const smtpHost = "smtp.address.com"; //add your actual SMTP server address
    const smtpPort = 587; //add your actual SMTP port
    const user = "support@example.cz"; //add your actual sender
    const password = "Password"; //add sender's password

    try {
        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: false,
            auth: { user, pass: password },
            tls: { ciphers: "SSLv3" },
        });

        await transporter.verify();
        console.log("SMTP connection successful!");

        // Send a test email
        await transporter.sendMail({
            from: user,
            to: "email@example.cz", //add the recipient email address
            subject: "Test Email", 
            text: "This is a test email from nodemailer."
        });
        console.log("Test email sent!");
    } catch (error) {
        console.error("Error testing email connection:", error.message);
    }
}

testEmailConnection();
