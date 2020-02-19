const nodemailer = require('nodemailer');
import Mail from 'nodemailer/lib/mailer';

export default () :Mail|Error => {
    if(process.env.SMTP == null) return new Error("no smtp host on env");
    else if(process.env.SMTP_AUTH == null) return new Error("no smtp auth on env")
    else if(process.env.SMTP_PASS == null) return new Error("no smtp pass on env")
    else return nodemailer.createTransport({
        host: process.env.SMTP,
        port: 587,
        secure: false,
        auth: {
          user: process.env.SMTP_AUTH,
          pass: process.env.SMTP_PASS
        }
    });
}
