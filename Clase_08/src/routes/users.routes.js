import { Router } from 'express';

const router = Router();

// Simulamos una DB
let users = []

// Listar todos los usuarios
router.get('/', (req, res) => {
    res.send(users);
})

// Crear o dar de alta un usurio
router.post('/', (req, res) => {
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
router.put('/:userId', (req, res) => {
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
router.delete('/:userId', (req, res) => {
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

export default router;