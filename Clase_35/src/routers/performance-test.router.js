import { Router } from "express";

const router = Router();

router.get("/operation/simple", (req, res) => {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
        sum += i;
    };
    res.send({
        status: "success",
        message: `El worker ${process.pid} atendió la petición, el resultado de sum es: ${sum}`
    });
});

router.get("/operation/complex", (req, res) => {
    let sum = 0;
    for (let i = 0; i < 5e8; i++) {
        sum += i;
    }
    res.send({
        status: "success",
        message: `El worker ${process.pid} atendió la petición, el resultado de sum es: ${sum}`
    });
});
export default router;