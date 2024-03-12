import express from 'express';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';

import studentsModel from './models/students.js';

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);

const SERVER_PORT = 9090;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

const connectMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/handsOnClase17?retryWrites=true&w=majority');
        console.log("Conectado con exito a MongoDB usando Moongose.");

        //    Data sin paginacion
        // let student = await studentsModel.find({ gender: "Female" })


        // Usando Paginate
        // let student = await studentsModel.paginate({ gender: "Female" }, { limit: 5, page: 1 })


        // console.log(student);

    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
};
connectMongoDB();