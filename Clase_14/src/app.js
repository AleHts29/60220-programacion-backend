import express from 'express';
import __dirname from './util.js';
import usersRouter from './routes/users.router.js'
import mongoose from 'mongoose';

const app = express();


//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Declaramos un router
app.use('/api/users', usersRouter)


const SERVER_PORT = 9090;
app.listen(9090, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

// Conxion con MongoDb
const URL_MONGO = 'mongodb+srv://admin:admin@cluster0.8hkzesl.mongodb.net/C14?retryWrites=true&w=majority'
const connectMongoDB = async () => {
    try {
        mongoose.connect(URL_MONGO)
        console.log("Conectado con exito a MongoDB usando Mongoose");
    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
}
connectMongoDB();
