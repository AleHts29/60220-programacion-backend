import { Router } from 'express';
import { uploader } from '../../utils.js';

const router = Router();

let pets = []

router.get('/', (request, response) => {
    console.log("Consumiendo api GET /api/users..");
    console.log("Usuarios actuales: ");
    console.log(pets);
    response.send(pets);
});


router.post('/', (request, response) => {
    let pet = request.body
    pet.id = Math.floor(Math.random() * 20 + 1);

    if (!pet.nombre || !pet.especie) {
        console.error("Mascota no es valida.");
        console.error(pet);
        response.status(400).send({ status: "Error", message: "Mascota invalida, verifique los datos de entrada." });
    } else {
        pets.push(pet)
        console.log(pets);
        response.send({ status: "Success", message: `Mascota agregada con exito, con ID: ${pet.id}` });
    }
});


/*=============================================
=                   Section_02                =
=============================================*/
// middleware a nivel de router
router.use(function (request, response, next) {
    console.log("Mi propio middleware a nivel de ROUTER!!.");
    console.log("Time: " + Date().toLocaleString());
    next();
});

router.get('/test', (request, response) => {
    response.send("Test Middleware");
});

router.get('/test2', (request, response) => {
    response.send("Test Middleware");
});


// Middleware a nivel endpoint
function miMiddleware(req, res, next) {
    console.log("llama a mi middleware a nivel endpoint!!!..");
    next();
}


/**
 * Metodo GET por default:
 */
router.get('/middleware', miMiddleware, (request, response) => {
    console.log("Consumiendo api GET /api/pets..");
    console.log("Mascotas actuales: ");
    console.log(pets);
    response.send(pets);
});



/*=============================================
=                   Section_03                =
=============================================*/
// Usando Multer
router.post('/profile', uploader.single('file'), (request, response) => {
    if (!request.file) {
        return response.status(400).send({ status: "error", mensaje: "No se adjunto archivo." });
    }

    // Persistimos una mascota con su foto
    let pet = request.body;
    pet.id = Math.floor(Math.random() * 20 + 1);
    pet.image = request.file.path

    if (!pet.nombre || !pet.especie) {
        console.error("Mascota no es valida.");
        console.error(pet);
        response.status(400).send({ status: "Error", message: "Mascota invalida, verifique los datos de entrada." });
    } else {
        pets.push(pet);
        console.log(pets);
        response.send({ status: "Success", message: `Mascota agregada con exito, con ID: ${pet.id}` });
    }
});


export default router;