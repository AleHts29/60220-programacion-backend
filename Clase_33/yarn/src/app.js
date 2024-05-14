import express from 'express';
import config from './config/config.js';
//import Routers
import compressionRouter from './routers/compression.router.js'
import usersRouter from './routers/users.router.js'


//Other imports...
import compression from 'express-compression';

const app = express();

//JSON settings:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// process.env.NODE_ENV = "production"
// GZIP
// app.use(compression());

// brotli
app.use(compression(
    { brotli: { enabled: true, zlib: {} } }
));


//Declare routers:
app.use("/compression", compressionRouter);
app.use("/api/users", usersRouter);


const SERVER_PORT = config.port;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});