import { Router } from 'express';
//import del service repository:
import { getAll, createStudent, randomStudent } from '../controllers/students.controller.js';

const router = Router();

//TODO: Migrar a patrón controller:

router.get('/', getAll);

router.post('/', createStudent);

// Extra
router.get('/random', randomStudent)

export default router;