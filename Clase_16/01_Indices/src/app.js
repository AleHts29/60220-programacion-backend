import express from 'express';
import __dirname from './util.js';
import { userModel } from './models/user.model.js';


import mongoose from 'mongoose';

//Declarando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Declaración de Routers:


const SERVER_PORT = 9091;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

const connectMongoDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/clase16_indexes_populate?retryWrites=true&w=majority');
    console.log("Conectado con exito a MongoDB usando Moongose.");


    let response1 = await userModel.find().explain('executionStats')
    console.log(response1);

    let response2 = await userModel.find({ first_name: "Celia" }).explain('executionStats')
    console.log(response2);


};
connectMongoDB();