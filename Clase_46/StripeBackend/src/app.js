import express from 'express';
import config from './config/config.js';
import cors from 'cors';
//import Routers
import usersRouter from './routers/users.router.js'
//Stripe Router:
import paymentRouter from './routers/payments.router.js'

const app = express();

//JSON settings:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Declare routers:
app.use("/api/users", usersRouter);
app.use("/api/payments", paymentRouter);

const SERVER_PORT = config.port;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});