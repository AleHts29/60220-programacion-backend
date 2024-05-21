import express from 'express';
import config from './config/config.js';

// **_BASE
import cluster from 'cluster';
import { cpus } from 'os';

//import Routers
//Performance test:
import performanceRouter from './routers/performance-test.router.js';
import { addLogger } from './config/logger.js';


/**
*
Si la condición cluster.isPrimary se cumple (es decir, el proceso actual es el proceso principal), luego se utiliza cluster.fork() para crear un nuevo proceso hijo (worker). El nuevo proceso hijo se ejecutará como una copia independiente de la aplicación, lo que significa que puede manejar solicitudes de manera concurrente junto con el proceso principal.

Si la condición cluster.isPrimary no se cumple (es decir, el proceso actual no es el proceso principal) y son Los workers quienes manejarán las solicitudes entrantes de manera concurrente junto con otros workers.
*
*/

// console.log(cluster.isPrimary);

// if (cluster.isPrimary) {
//     console.log("Soy proceso primario y voy delegar el trabajo a un fork.");


//     cluster.fork(); // Se utiliza para crear un nuevo subproceso (o hijo)
//     cluster.fork();
//     cluster.fork();
//     cluster.fork();
// } else {
//     console.log("Soy un worker!!");
// }


// **_BASE_02
console.log("Preguntar si es el cluster primario:");
console.log(cluster.isPrimary);
if (cluster.isPrimary) {
    console.log("Soy proceso primario y voy delegar el trabajo a un fork.");
    console.log("Identificamos el ProcessId Padre: " + process.pid);
    const numeroProcesadores = cpus().length
    // console.log(numeroProcesadores)
    for (let i = 0; i < numeroProcesadores; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker) => {
        console.log(`Worker ${worker.process.pid} died`);
        cluster.fork() //damos de alta un nuevo proceso
    })



} else {
    // Aqui aparecen los workers
    console.log("Soy un worker!!");

    console.log("Este es un proceso Fork! Soy un worker!!");
    console.log(`Soy un proceso worker con el id: ${process.pid}`);


    const app = express();

    app.use(addLogger);


    //Declare routers:
    app.get("/", (req, res) => {
        res.send({ status: "success", message: `Peticion atendida por el worker: ${process.pid}` });
    });


    app.use("/api/performance", performanceRouter)


    const SERVER_PORT = config.port;
    app.listen(SERVER_PORT, () => {
        console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
    });

}