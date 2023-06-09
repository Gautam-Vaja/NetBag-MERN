const nodemailer = require("nodemailer")
SendEmail = async (options) => {

        const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                secure: process.env.SMTP_SECURE, // use SSL
                auth: {
                        user: process.env.SMTP_MAIL,
                        pass: process.env.SMTP_PASSWORD
                }
        })

        const MailOption = {
                from: process.env.SMTP_MAIL,
                to: options.email,
                subject: options.subject,
                text: options.message
        }

        await transporter.sendMail(MailOption)

}

module.exports = SendEmail