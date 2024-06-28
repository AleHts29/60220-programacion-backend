import BusinessService from "../services/dao/business.dao.js";
import config from "../config/config.js";
import twilio from 'twilio';

// TODO::: a implementar -- Trial: $0.8244
const twilioClient = twilio(config.twilioAccountSID, config.twilioAuthToken);
const twilioSMSOptions = {
    body: "Esto es un mensaje SMS de prueba usando Twilio desde Coderhouse.",
    from: config.twilioSmsNumber,
    to: config.twilioToSmsNumber
}

export const sendSMS = async (req, res) => {
    try {
        console.log("Enviando SMS using Twilio account.");
        console.log(twilioClient);
        const result = await twilioClient.messages.create(twilioSMSOptions);
        res.send({ message: "Success!", payload: result });
    } catch (error) {
        console.error("Hubo un problema enviando el SMS usando Twilio.");
        res.status(500).send({ error: error });
    }
}