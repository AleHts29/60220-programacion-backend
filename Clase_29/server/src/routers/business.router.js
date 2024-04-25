import { Router } from 'express'
import { getBusiness, getBusinessById, getBusinessesByCategory, saveBusiness } from '../controllers/business.controller.js';

const router = Router();

router.get('/', getBusiness)
router.post('/', saveBusiness)
router.get('/:uid', getBusinessById)
router.get('/categories/:category', getBusinessesByCategory)



export default router;