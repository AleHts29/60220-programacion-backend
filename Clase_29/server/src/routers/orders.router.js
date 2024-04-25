import { Router } from 'express'
import { getOrders, getOrderById, saveOrder } from '../controllers/orders.controller.js';

const router = Router();

router.get('/', getOrders)
router.post('/', saveOrder)
router.get('/:uid', getOrderById)

export default router;