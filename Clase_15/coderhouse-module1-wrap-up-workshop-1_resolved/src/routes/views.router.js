import {Router} from 'express';
import StudentService from '../services/db/students.service.js';
import CourseService from '../services/db/courses.service.js';

const studentService = new StudentService();
const courseService = new CourseService();

const router = Router();

router.get('/',async(req,res)=>{
    let students = await studentService.getAll();
    console.log(students);
    res.render('students',{students: students})
})

router.get('/courses',async(req,res)=>{
    let courses = await courseService.getAll();
    console.log(courses);
    res.render('courses',{courses})
})


export default router;