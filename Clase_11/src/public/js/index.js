// Configuracion del socket del lado del cliente
const socket = io();

// socket.emit('msgKEY', "Hola soy el Cliente enviando un msg")

// socket.on('msg_02', data => {
//     console.log(data);
// })


// socket.on('msg_03', data => {
//     console.log(data);
// })


socket.on('msg_04', data => {
    console.log(data);
})