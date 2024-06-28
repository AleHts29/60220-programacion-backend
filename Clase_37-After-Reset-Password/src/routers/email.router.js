import { Router } from "express";
import { sendEmail, sendEmailWithAttachments, sendEmailToResetPassword, resetPassword } from '../controllers/email.controller.js';

const router = Router();

router.get("/", sendEmail);
router.get("/attachments", sendEmailWithAttachments);

router.post("/send-email-to-reset", sendEmailToResetPassword);
router.get('/reset-password/:token', resetPassword)

export default router;