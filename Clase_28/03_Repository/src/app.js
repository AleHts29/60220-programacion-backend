import express from 'express';
import __dirname from './util.js';
import config from './config/config.js';
import MongoSingleton from './config/mongodb-singleton.js';

//Routers a importar:
import studentRouter from './routes/students.router.js'
import coursesRouter from './routes/courses.router.js'


//Declarando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Declaración de Routers:
app.use("/api/students", studentRouter);
app.use("/api/courses", coursesRouter);


app.listen(config.port, () => {
    console.log("Servidor escuchando por el puerto: " + config.port);
});

// Esta configuracion solo se usa si NO estoy usando una FACTORY
const mongoInstance = async () => {
    try {
        await MongoSingleton.getInstance();
    } catch (error) {
        console.error(error);
        process.exit();
    }
};
mongoInstance();
