import mongoose from "mongoose";
import config from "./config.js";

export default class MongoSingleton {
    static #instance;

    constructor() {
        this.#connectMongoDB();
    };

    static getInstance() {
        if (this.#instance) {
            console.log("Ya se ha abierto una conexion a MongoDB.");
        } else {
            this.#instance = new MongoSingleton();
        }
        return this.#instance;
    };

    #connectMongoDB = async () => {
        try {
            await mongoose.connect(
                config.mongoUrl,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    // Cambiar el nivel de escritura a 1 (menos seguro pero más rápido)
                    w: 1,
                }
            );
            console.log("Conectado con exito a MongoDB usando Moongose.");
        } catch (error) {
            console.error("No se pudo conectar a la BD usando Moongose: " + error);
            process.exit();
        }
    };
};


// MongoServerError: cannot use non-majority 'w' mode majorit when a host is not a member of a replica set, se debe a la configuración de escritura ('w') que estás utilizando en tus operaciones de MongoDB. Este error ocurre cuando intentas utilizar el modo de escritura 'majority' en una base de datos MongoDB que no está configurada como un conjunto de réplicas (replica set).