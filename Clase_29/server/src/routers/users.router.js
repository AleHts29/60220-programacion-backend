import { Router } from 'express'
import { getUsers, getUserById, saveUser } from '../controllers/users.controller.js';

const router = Router();

router.get('/', getUsers)
router.post('/', saveUser)
router.get('/:uid', getUserById)

export default router;