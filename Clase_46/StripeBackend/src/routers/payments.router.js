import { Router } from "express"
import PaymentService from "../services/payment.js"

const router = Router();


// Simulamos
const products = [
    { id: 1, name: "papas", price: 1000 },
    { id: 2, name: "queso", price: 500 },
    { id: 3, name: "hamburguesa", price: 1500 },
    { id: 4, name: "soda", price: 1000 },
    { id: 5, name: "golosinas", price: 800 }
]

// Un endpoint
router.post("/payment-intents", async (req, res) => {
    console.log(`Id del producto a procesar: ${req.query.id}`);
    try {

        // Hacemos busqueda en la 'DB'
        const productReq = products.find(product => product.id === parseInt(req.query.id))
        if (!productReq) return res.status(404).send({ status: "error", error: "product not found" })

        // Armamos un obj con la info del intento de pago
        const paymentIntentInfoo = {
            amount: productReq.price,
            currency: 'usd',
            metadata: {
                userId: 'Usert Test',
                product: JSON.stringify(productReq)
            }
        }

        // consumimos el servicio para crear el payment Intent
        const service = new PaymentService()
        let result = await service.createPaymentIntent(paymentIntentInfoo)
        console.log(result);

        res.send(({ status: "success", payload: result }))


    } catch (error) {
        console.error(error);
        return res.status(500).send({ status: "error", error: "Ocurrio un error en el server" })
    }
})



export default router;