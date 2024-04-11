import { Router } from 'express';
import { fork } from 'child_process';

const router = Router();


let count = 0
router.get('/', (req, res) => {
    res.render('index', { count: count++ });
});


router.get("/suma-sin-fork", (req, res) => {
    res.send(`El resultado de la operacion es: ${operacionCompleja()}`)
});

//sin Child Process - Fork 
const operacionCompleja = () => {
    let result = 0;
    for (let i = 0; i < 6e9; i++) {
        result += i;
    }
    return result;
};


//con Child Process - Fork 
router.get("/suma", (req, res) => {
    const child = fork("./src/forks/operations.js");
    child.send("Iniciar calculo");
    child.on("message", result => {
        res.send(`El resultado de la operacion es ${result}`);
    });
});


export default router;