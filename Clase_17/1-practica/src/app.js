import express from 'express';
import __dirname from './util.js';
import mongoose from 'mongoose';
import * as dataOrders from './db/data.js'

import ordersModel from './models/orders.model.js';

//Declarando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Declaración de Routers:


const SERVER_PORT = 9090;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

const connectMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/pizzeria?retryWrites=true&w=majority');
        console.log("Conectado con exito a MongoDB usando Moongose.");
        // let response = await ordersModel.insertMany(dataOrders.default)
        // console.log(response);

        // let response = await ordersModel.insertMany({
        //     name: "Vegan", size: "exta-large", price: 18, quantity: 10, date: "2021-01-13T05:10:13Z"
        // });
        // console.log(response);

        // Primero hacemos una busqueda
        let orders = await ordersModel.find();
        console.log(orders);



        let size = "small"
        // 2da parte
        orders = await ordersModel.aggregate([

            //Stage 1: Filtrar las ordenes por tamaño, en este caso solo pizzas medianas:
            {
                $match: { size: size }
            },

            //Stage 2: Agrupar por sabores y acumular el número de ejemplares de cada sabor:
            {
                $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } }
            },


            //Stage 3: Ordenar los documentos ya agrupados de mayor a menor.
            {
                $sort: { totalQuantity: -1 }
            },

            //Stage 4: Guardar todos los documentos generados de la agregacion en un nuevo documento 
            //         dentro de un arreglo. Para no dejarlos sueltos en la colección.
            //         $push indica que se guarda en un array, y $$ROOT inserta todo el documento.

            {
                $group: { _id: 1, orders: { $push: "$$ROOT" } }
            },

            //Stage 5: Creamos nuestro pryecto(documento) a partir del array de datos.
            {
                $project: {
                    "_id": 0,
                    orders: "$orders"
                }
            },
            //Stage FINAL (se crea una collection --> reports)
            {
                $merge: { into: "reports" }
            }
        ])

        console.log(orders);


    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
};
connectMongoDB();