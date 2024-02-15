import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import { Server } from 'socket.io'
import viewRouter from './routes/views.router.js'

const app = express();
const PORT = 9090;


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


const logs = [];
socketServer.on('connection', socket => {
    // console.log(socket);
    console.log("Nuevo cliente conectado");

    // Escuchamos al cliente
    // socket.on('msgKEY', data => {
    //     console.log(data);
    // })

    // socket.emit('msg_02', "Mensaje enviado desde el BACKEND!!")

    // socket.broadcast.emit('msg_03', "Este evento es para todos los sockets, menos el socket desde que se emitió el mensaje!")

    // socketServer.emit('msg_04', "Mensaje enviado desde el BACKEND!! para todos")


    // Ejertcico 02
    //Message2 se utiliza para la parte de almacenar y devolver los logs completos.
    socketServer.emit('log', { logs });

    socket.on("message2", data => {
        logs.push({ socketid: socket.id, message: data })
        socketServer.emit('log', { logs });
    });
})




