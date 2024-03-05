import express from 'express';
import __dirname from './util.js';
import handlebars from 'express-handlebars';

import mongoose from 'mongoose';
import studentRouter from './routes/students.router.js'
import coursesRouter from './routes/courses.router.js'
import viewsRouter from "./routes/views.router.js";
import studentsModel from './services/db/models/students.js';
import { coursesModel } from './services/db/models/courses.js';

//Declarando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/**
 * Template engine
 */
app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');
app.use(express.static(__dirname+'/public'))

//Declaración de Routers:
app.use('/',viewsRouter);
app.use("/api/students", studentRouter);
app.use("/api/courses", coursesRouter);

const SERVER_PORT = 9091;
app.listen(9091, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

const connectMongoDB = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/colegio?retryWrites=true&w=majority');
        console.log("Conectado con exito a MongoDB usando Moongose.");

        /*let nuevoEstudiante = await studentsModel.create({
            name: "Luis",
            lastName : "Munar",
            age : "20",
        });*/

        /*let nuevoCurso = await coursesModel.create(
            {
                title: "Curso Backend",
                description: "Curso backend de NodeJS",
                teacherName: "Juan Torres"
            }
        );*/

        let student = await studentsModel.findOne({_id: "640a705f72d18c48ca6f6741"});
        console.log(JSON.stringify(student, null, '\t'));
        //student.courses.push({course: "640a719de27c256369c70d15"});
        //console.log(JSON.stringify(student));
        //let result = await studentsModel.updateOne(student);
        //console.log(result);

    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
};
connectMongoDB();