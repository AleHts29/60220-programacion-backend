import StudentServiceDao from "./dao/mongo/students.service.js";
import CoursesDao from "./dao/mongo/courses.service.js"

import StudentRepository from './repository/students.repository.js'
import CoursesRepository from './repository/courses.repository.js'


// Instanciamos las clases
const studentDao = new StudentServiceDao()
const coursesDao = new CoursesDao();


export const studentService = new StudentRepository(studentDao)
export const coursesService = new CoursesRepository(coursesDao)



