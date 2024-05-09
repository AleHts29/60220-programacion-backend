import { Router } from "express";
import { getUsers, saveUser } from '../controllers/users.controller.js';
import errorHandler from '../services/errors/middlewares/index.js';

const router = Router();



router.get("/", getUsers);
router.post("/", saveUser);

// Para implementar este middleware se debe sacar/comentar el try/catch del controllers/users.controller.js
router.use(errorHandler);

export default router;