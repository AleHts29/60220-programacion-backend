

// Para trabajar Repository
import { studentService } from '../services/service.js';
import StudentsDto from '../services/dto/student.dto.js';

export async function getAllStudents(req, res) {
    try {
        let students = await studentService.getAll();
        res.send(students);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo obtener los estudiantes." });
    }
}


export async function saveStudent(req, res) {
    try {
        const studentDto = new StudentsDto(req.body); // Antes paso por el DTO y moldeo la info
        let result = await studentService.save(studentDto);
        res.status(201).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo guardar el estudiante." });
    }
}