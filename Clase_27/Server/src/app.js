import express from 'express';
import __dirname from './utils.js';
import config from './config/config.js';
import MongoSingleton from './config/mongodb-singleton.js'
import cors from 'cors';

const app = express()

//JSON settings:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Habilitamos cors del lado del server para permitir conexiones externas
// cualquier cliente los clientes
// app.use(cors())



// Configura el middleware cors con opciones personalizadas
const corsOptions = {
    // Permitir solo solicitudes desde un cliente específico
    origin: 'http://127.0.0.1:5500',

    // Configura los métodos HTTP permitidos
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',

    // Configura las cabeceras permitidas
    allowedHeaders: 'Content-Type,Authorization',

    // Configura si se permiten cookies en las solicitudes
    credentials: true,
};
app.use(cors(corsOptions));







//Declare routers:
app.get('/test', (req, res) => {
    res.send({ message: "success", payload: "Success!!" });
});


const SERVER_PORT = config.port;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
    //DotEnv:
    //console.log(config);
});


const mongoInstance = async () => {
    try {
        await MongoSingleton.getInstance()
    } catch (error) {
        console.error(error);
    }
}
mongoInstance();


// TEST de nuevas conexiones
mongoInstance();
mongoInstance();
mongoInstance();

