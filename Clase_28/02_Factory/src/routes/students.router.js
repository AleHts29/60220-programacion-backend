import { Router } from 'express';
import * as StudentController from '../controllers/student.controllers.js'

const router = Router();


router.get('/', StudentController.getAllStudents);
router.post('/', StudentController.saveStudent)


export default router;