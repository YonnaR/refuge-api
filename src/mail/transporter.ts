const nodemailer = require('nodemailer');
import Mail from 'nodemailer/lib/mailer';

export default () :Mail => {
    return nodemailer.createTransport({
        host: process.env.SMTP,
        port: 587,
        secure: false,
        auth: {
          user: process.env.SMTP_AUTH,
          pass: process.env.SMTP_PASS
        }
    });
}
