import express from 'express';
import handlebars from 'express-handlebars'
// import { engine } from 'express-handlebars'
import __dirname from './util.js';


// Delcaramos exp
const app = express()
const PORT = 8080

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import viewRouter from './routes/views.router.js'

// configuracion de HBS
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

//Carpeta public
app.use(express.static(__dirname + '/public/'));


// Ruta test
app.get('/hello', (req, res) => {

    let testUser = {
        name: "Alan",
        last_name: "Barcos",
        edad: 27
    }
    res.render('hello', testUser)
})


app.use('/api/hbs', viewRouter)




app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})


