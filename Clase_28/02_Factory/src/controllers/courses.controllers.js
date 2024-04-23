// Para trabajar Factory
import { coursesService } from '../services/factory.js';

// Para trabajar Repository
// import { coursesService } from '../services/service.js';

export async function getAllCourses(req, res) {
    try {
        let courses = await coursesService.getAll();
        res.send(courses);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo obtener los cursos." });
    }
}


export async function saveCourse(req, res) {
    try {
        // const studentDto = new StudentsDto(req.body);
        let result = await coursesService.save(req.body);
        res.status(201).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo guardar el curso." });
    }
}