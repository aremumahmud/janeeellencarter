const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
const template = require('./template')
const path = require("path")


app.use(express.urlencoded())
app.use(express.json())

app.use(express.static(path.join(__dirname, './dist')))



function send_email(email, req, res) {

    let transporter = nodemailer.createTransport({
        //host: 'smtp-relay.sendinblue.com',
        host: 'lim114.truehost.cloud' || process.env.HOST || 'mail.mistressdanielle1.com',
        port: 465,
        secure: true, // use SSL

        auth: {
            user: "info@janeellencarter.com" || process.env.SMTP_USER || 'send@mistressdanielle1.com',
            pass: process.env.SMTP_PASSWORD || 'Aremu2003$$'
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    });
    transporter.verify((error, success) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Server is ready to take messages');
        }
    });
    var mailOptions = {
        from: process.env.FROM || 'info@janeellencarter.com',
        to: email,
        subject: 'Messge Notification From JANE ELLEN CARTER!',

        html: template(req.body)
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.redirect('/#error_message')
        } else {
            console.log('Email sent: ' + info.response);
            res.redirect('/#success_message')
        }
    });


}


app.post('/send_email', (req, res) => {
    send_email('info@janeellencarter.com', req, res)
})


app.listen(3000, () => {
    console.log("started the server")
})