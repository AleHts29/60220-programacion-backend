const http = require('http')

const PORT = 9090;


const server = http.createServer((request, response) => {
    response.end("Mi primer Hola Mundo!!! con modulo nativo de NODEJS")
})

server.listen(PORT, () => {
    console.log(`Server run on PORT: ${PORT}`);
})

// Desde el cliente
// http://localhost:puerto/ ---> 127.0.0.1