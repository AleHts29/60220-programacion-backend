import { Router } from "express"
import calculator from 'mi-libreria-calculator-c60220'


const router = Router();

// Suma
router.post('/sum', (req, res) => {
    const { num1, num2 } = req.body
    const result = calculator.sum(num1, num2)
    res.send({ status: 'success', result: result })
})


// Divide
router.post('/divide', (req, res) => {
    try {
        const { num1, num2 } = req.body
        const result = calculator.divide(num1, num2)
        res.send({ status: 'success', result: result })
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})




export default router