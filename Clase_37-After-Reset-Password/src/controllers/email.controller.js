import nodemailer from 'nodemailer';
import config from '../config/config.js';
import __dirname from '../utils.js'
import { v4 } from 'uuid'

// TODO::: a implementar

// configuracion de transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: config.gmailAccount,
        pass: config.gmailAppPassword
    }
})

// Verificamos conexion con gmail
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take our messages');
    }
})

const mailOptions = {
    from: "Coder Test - " + config.gmailAccount,
    to: config.gmailAccount,
    subject: "Correo de prueba CoderHouse Pkrogramacion BackEnmd clase30",
    html: `<div><h1> Esto es un test de correo con NodeMailer </h1></div>`,
    attachments: []
}


const mailOptionsWithAttachments = {
    from: "Coder Test - " + config.gmailAccount,
    to: `${config.gmailAccount};enzozanino2000@gmail.com; leo1987@yopmail.com`,
    subject: "Correo de prueba CoderHouse Pkrogramacion BackEnmd clase30",
    html: `<div>
                <h1>Esto es un Test de envio de correos con Nodemailer!</h1>
                <p>Ahora usando imagenes: </p>
                <img src="cid:meme"/>
            </div>`,
    attachments: [
        {
            filename: 'Meme de programacion',
            path: __dirname + '/public/images/meme.png',
            cid: 'meme'
        }
    ]
}


export const sendEmail = (req, res) => {
    try {
        let result = transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(400).send({ message: "Error", payload: error });
            }
            console.log('Message sent: %s', info.messageId);
            res.send({ message: "Success", payload: info })
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo enviar el email desde:" + config.gmailAccount });
    }
}


export const sendEmailWithAttachments = (req, res) => {
    try {
        let result = transporter.sendMail(mailOptionsWithAttachments, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).send({ message: "Error", payload: error });
            }
            console.log('Message sent: %s', info.messageId);
            res.send({ message: "Success", payload: info })
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo enviar el email desde:" + config.gmailAccount });
    }
}


/*=============================================
=                Restablecer Pass             =
=============================================*/

const mailOptionsToReset = {
    from: config.gmailAccount,
    to: config.gmailAccount,
    subject: 'Reset Password',
};
const tempDbMails = {}

export const sendEmailToResetPassword = (req, res) => {
    try {
        const { email } = req.body
        if (!email) {
            return res.status(400).send('Email not privided')
        }
        const token = v4();
        console.log(Date.now());
        const link = `http://localhost:9090/api/email/reset-password/${token}`;

        // Store the email and its expiration time
        //  60 * 60 * 1000: Esto representa una hora en milisegundos. Multiplicando 60 (segundos) por 60 (minutos) y luego por 1000 (milisegundos), obtenemos el equivalente a una hora en milisegundos.
        tempDbMails[token] = {
            email,
            expirationTime: new Date(Date.now() + 1 * 60 * 1000)
        }

        console.log(tempDbMails);

        mailOptionsToReset.html = `To reset your password, click on the following link: <a href="${link}">Reset Password</a>`


        transporter.sendMail(mailOptionsToReset, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).send({ message: "Error", payload: error });
            }
            console.log('Message sent: %s', info.messageId);
            res.send({ message: "Success", payload: info })
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo enviar el email desde:" + config.gmailAccount });
    }
}


export const resetPassword = (req, res) => {
    const token = req.params.token;
    const email = tempDbMails[token];
    console.log(email);
    const now = new Date()
    const expirationTime = email?.expirationTime
    if (now > expirationTime || !expirationTime) {
        delete tempDbMails[token]
        console.log('expiration time completed');
        return res.redirect('/send-email-to-reset')
    }
    res.send('<h1>Start Reset Password Porcess</h1>');
}


