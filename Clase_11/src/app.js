import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import { Server } from 'socket.io'
import viewRouter from './routes/views.router.js'

const app = express();
const PORT = process.env.PORT || 8080;


//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Uso de vista de plantillas
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + "/views");
app.set('view engine', 'handlebars');


// Indicamos que vamos a trabajar con archivos estaticos
app.use(express.static(__dirname + "/public"))



// Router
app.use('/', viewRouter)


const httpServer = app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})

// Instanciamos socket.io
const socketServer = new Server(httpServer);


const messages = [];
socketServer.on('connection', socket => {
    // Esto lo ve cualquier user que se conecte
    socketServer.emit('messageLogs', messages);



    // aqui vamos a recibir { user: user, message: catBox.value }
    socket.on("message", data => {
        messages.push(data)


        // enviamos un array de objetos ---> [{ user: "Juan", message: "Hola" }, { user: "Elias", message: "Como estas?" }]
        socketServer.emit('messageLogs', messages);
    });


    // hacemos un broadcast del nuevo usuario que se conecta al chat
    socket.on('userConnected', data => {
        console.log(data);
        socket.broadcast.emit('userConnected', data.user)
    })


    // Cuando desees cerrar la conexión con este cliente en particular:
    socket.on('closeChat', data => {
        if (data.close === "close")
            socket.disconnect();
    })


})




