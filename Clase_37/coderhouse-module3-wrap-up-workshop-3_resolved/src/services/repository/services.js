import StudentServiceDao from "../db/dao/students.dao.js";
import CoursesDao from "../db/dao/courses.dao.js"

import StudentRepository from "./students.repository.js";
import CoursesRepository from "./courses.repository.js";

const studentDao = new StudentServiceDao()
const coursesDao = new CoursesDao();

export const studentService = new StudentRepository(studentDao);
export const coursesService = new CoursesRepository(coursesDao);