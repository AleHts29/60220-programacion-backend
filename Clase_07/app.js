import express from 'express';

const app = express();

// Esto es un Mideldware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = 9090;

app.get('/ping', (req, res) => {
    res.send({ status: "ok" })
})

// Simulamos una DB
let users = []

// Listar todos los usuarios
app.get('/api/users', (req, res) => {
    res.send(users);
})

// Crear o dar de alta un usurio
app.post('/api/user', (req, res) => {
    console.log(req.body);
    let user = req.body

    // Asiognamos un ID
    const numRamdom = Math.floor(Math.random() * 100 + 1)
    user.id = numRamdom

    if (!user.first_name || !user.last_name) {
        return res.status(400).send({ status: "error", msg: "valores incompletos, revisar datos de entrada!!" })
    }

    users.push(user)
    res.send({ status: "Success", msg: 'Usuario creado!!' })
})

// ACTUALIZAR
app.put('/api/users/:userId', (req, res) => {
    // capturo el id
    let userId = parseInt(req.params.userId)

    // capturo info del req.body
    let userUpdate = req.body

    const userPosition = users.findIndex((u => u.id === userId));

    if (userPosition < 0) {
        return response.status(202).send({ status: "info", error: "Usuario no encontrado" });
    }

    users[userPosition] = userUpdate;

    res.send({ status: "Success", message: "Usuario Actualizado.", data: users[userPosition] }); //Si no se indica retorna status HTTP 200OK.

})


// DELETE
app.delete('/api/users/:userId', (req, res) => {
    let userId = parseInt(req.params.userId);

    // tomamos el tamanio del array antes de elimanr el registro
    const usersSize = users.length;


    // buscamos el registro por el id
    const userPosition = users.findIndex((u => u.id === userId));
    if (userPosition < 0) {
        return response.status(202).send({ status: "info", error: "Usuario no encontrado" });
    }

    // Eliminamos el registro
    users.splice(userPosition, 1);
    if (users.length === usersSize) {
        return response.status(500).send({ status: "error", error: "Usuario no se pudo borrar." });
    }


    res.send({ status: "Success", message: "Usuario Eliminado." }); //Si no se indica retorna status HTTP 200 OK.

})

app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
})




// EJEMPLO de ruta_base para hacer ejercicio clase_07 - Servidor con GET, POST, PUT, DELETE
/*

let frase = "Frase inicial";

app.put('/api/palabras/:pos', (request, response) => {
    const pos = request.params.pos;
    const palabra = request.body.palabra;
    if (isNaN(pos)) return response.status(400).send({ status: "error", error: "Pos debe ser un número" });
    const parsedPos = parseInt(pos);
    const palabras = frase.split(' '); // .split nos retorna un array --> [ 'Frase', 'inicial' ]
    console.log(palabras);
    if (parsedPos <= 0 || parsedPos > palabras.length) return response.status(400).send({ status: "error", error: "Posición fuera del rango de la frase" })
    const anterior = palabras[parsedPos - 1];
    palabras[parsedPos - 1] = palabra;
    frase = palabras.join(' '); // .join me destruye el array y crea una frase con las dos palabras
    console.log(frase);
    response.send({ actualizada: palabra, anterior })
})
*/