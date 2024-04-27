import express from 'express';
import ControladorNoticias from '../controllers/Noticias.js';

const router = express.Router();

class RouterNoticias {
    constructor() {
        this.controladorNoticias = new ControladorNoticias();
    }

    start() {
        router.get('/:id', this.controladorNoticias.obtenerNoticias);
        router.post('/', this.controladorNoticias.guardarNoticias);
        router.put('/:id', this.controladorNoticias.actualizarNoticia);
        router.delete('/:id', this.controladorNoticias.borrarNoticia);

        return router;
    }
}

export default RouterNoticias;