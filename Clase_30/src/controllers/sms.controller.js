import config from "../config/config.js";
import twilio from 'twilio'

const twilioClient = twilio(config.twilioAccountSID, config.twilioAuthToken);
const twilioOptions = {
    body: 'Esto es un mensaje SMS de test usando twilio desde CoderHouse',
    from: config.twilioSmsNumber,
    to: config.twilioToSmsNumber
}

// Metodo - sendSMS
export const sendSMS = async (req, res) => {
    try {
        console.log("Enviando SMS desde Twilio Account");
        console.log(twilioClient);
        const result = await twilioClient.messages.create(twilioOptions)
        res.send({ message: "Success", payload: result })
    } catch (error) {
        console.error("Hubo un problema enviando el SMS usando Twilio.");
        res.status(500).send({ error: error });
    }
}






