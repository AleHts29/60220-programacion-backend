import express from 'express';
import usersRoutes from './routes/users.routes.js'
import petsRoutes from './routes/pets.routes.js'
import __dirname from '../utils.js';



const app = express();

// Esto es un Mideldware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configuracion de archivos estaticos
app.use(express.static(__dirname + '/src/public'))



const PORT = 9090;

// Middleware a nivel de APP
app.use(function (req, res, next) {
    console.log("Mi propio middleware a nivel de APLICACION Principal!");
    console.log("Time: " + Date().toLocaleString());
    next()
})



// Ruta Telemetria
app.get('/ping', (req, res) => {
    console.log(__dirname);
    res.send({ status: "ok" })
})



// Definimos puntos de entrada para ROUTES
app.use('/api/user', usersRoutes)
app.use('/api/pet', petsRoutes)


app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
})


