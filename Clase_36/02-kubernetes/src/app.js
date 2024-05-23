import express from 'express';
import config from './config/config.js';
import MongoSingleton from './config/mongodb-singleton.js';
//import Routers
//Performance test:
import sessionRouter from './routers/sessions.router.js'
import userRouter from './routers/users.router.js';
import { addLogger } from './config/logger.js';

const app = express();

//JSON settings:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(addLogger);

//Declare routers:
app.use("/api/session", sessionRouter);
app.use("/api/user", userRouter);

const SERVER_PORT = config.port;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

// const mongoInstance = async () => {
//     try {
//         await MongoSingleton.getInstance();
//     } catch (error) {
//         console.error(error);
//         process.exit();
//     }
// };
// mongoInstance();