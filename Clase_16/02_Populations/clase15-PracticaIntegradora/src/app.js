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
app.use(express.urlencoded({ extended: true }));

/**
 * Template engine
 */
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'))

//Declaración de Routers:
app.use('/', viewsRouter);
app.use("/api/students", studentRouter);
app.use("/api/courses", coursesRouter);

const SERVER_PORT = 9091;
app.listen(9091, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

const connectMongoDB = async () => {

    /*=============================================
    =                   Population                =
    =============================================*/
    await mongoose.connect('mongodb://localhost:27017/colegio_C16?retryWrites=true&w=majority');
    console.log("Conectado con exito a MongoDB usando Moongose.");

    // 1ro creamos al estudiante
    // let nuevoEstudiante = await studentsModel.create({
    //     name: "Francisco",
    //     lastName: "Sodo",
    //     age: "25",
    // })
    // let student = await studentsModel.find(nuevoEstudiante._id)
    // console.log(student); //id: 65e9143a8867ffef8cc57087


    // 2do creamos un nuevo curso
    // let nuevoCurso = await coursesModel.create(
    //     {
    //         title: "Curso Go",
    //         description: "Curso backend de Golang",
    //         teacherName: "Juan Torres"
    //     }
    // );
    // let curso = await coursesModel.find(nuevoCurso._id)
    // console.log(curso); // id: 65e914f12daa60cd52aaa5c0


    // 3ro creamos la referencia
    // let student = await studentsModel.findOne({ _id: "65e9143a8867ffef8cc57087" })
    // console.log(JSON.stringify(student, null, '\t'));

    // student.courses.push({ course: "65e914f12daa60cd52aaa5c0" })
    // console.log(JSON.stringify(student, null, '\t'));


    // // Actualizamos la data en la DB
    // let result = await studentsModel.updateOne({ _id: "65e9143a8867ffef8cc57087" }, student)
    // console.log(result);


    // 4to añadimos el populate
    // let student = await studentsModel.find({ _id: "65e9143a8867ffef8cc57087" }).populate('courses.course')
    // console.log(JSON.stringify(student, null, '\t'));

    // usando Middleware
    let student = await studentsModel.find({ _id: "65e9143a8867ffef8cc57087" })
    console.log(JSON.stringify(student, null, '\t'));


};
connectMongoDB();