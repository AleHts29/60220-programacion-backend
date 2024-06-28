import { Router } from "express";
import {sendSMS} from '../controllers/sms.controller.js';

const router = Router();

router.get("/", sendSMS);

export default router;