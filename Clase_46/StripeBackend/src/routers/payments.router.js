import { Router } from "express";
import PaymentService from "../services/payment.js";

const router = Router();

// Simulamos una DB
const products = [
    { id: 1, name: "papas", price: 1000 },
    { id: 2, name: "queso", price: 500 },
    { id: 3, name: "hamburguesa", price: 1500 },
    { id: 4, name: "soda", price: 1000 },
    { id: 5, name: "golosinas", price: 800 }
];

router.post("/payment-intents", async (req, res) => {
    console.log(`Intentando realizar un pago con product id: ${req.query.id}`);
    try {
        const productRequested = products.find(product => product.id === parseInt(req.query.id));
        if (!productRequested) return res.status(404).send({ status: "error", error: "Product not found." });

        // Creamos un objeto de pago
        const paymentIntentInfo = {
            amount: productRequested.price,
            currency: 'usd',
            metadata: {
                userId: 'test user',
                producto: JSON.stringify(productRequested)
            }
        };

        // Creamos un Servicio para el pago
        const service = new PaymentService();
        let result = await service.createPaymentIntent(paymentIntentInfo);
        console.log("Resultado del intento de pago:");
        console.log(result);
        res.send({ status: "success", payload: result });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ status: "error", error: "Ocurrio un erro con el proveedor externo." });
    }

});

export default router;