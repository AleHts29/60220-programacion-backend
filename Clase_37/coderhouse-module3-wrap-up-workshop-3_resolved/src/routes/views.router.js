import {Router} from 'express';
import {studentService} from '../services/repository/services.js';
import CourseServiceDao from '../services/db/dao/courses.dao.js';
import { passportCall } from "../util.js";

const courseService = new CourseServiceDao();

const router = Router();

//Proteger estas vistas
router.get('/', passportCall('jwt'), async(req,res)=>{
    const student = req.user;
    console.log("Estudiante logueado: ");
    console.log(student);
    let students = await studentService.getAll();
    console.log(students);
    res.render('students',{students: students})
});

router.get('/student', passportCall('jwt'), async(req,res)=>{
    const student = req.user;
    console.log("Estudiante logueado: ");
    console.log(student);
    let students = new Array();
    students.push(student);
    res.render('students',{students: students});
});

router.get('/courses', passportCall('jwt'), async(req,res)=>{
    let courses = await courseService.getAll();
    console.log(courses);
    res.render('courses',{courses})
})


export default router;