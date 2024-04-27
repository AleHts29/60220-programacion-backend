import ServicioNoticias from '../services/Noticias.js';

class ControladorNoticias {
    constructor() {
        this.servicioNoticias = new ServicioNoticias();
    }

    obtenerNoticias = async (req, res) => {
        try {
            const id = req.params.id;
            const noticia = await this.servicioNoticias.obtenerNoticias(id);
            res.send(noticia);
        } catch (error) {
            console.error('error al obtener noticias', error);
            res.status(500).json({ error: error.message });
        }
    }

    guardarNoticias = async (req, res) => {
        try {
            const noticia = req.body;
            const noticiaGuardada = await this.servicioNoticias.guardarNoticia(noticia);
            res.send(noticiaGuardada);
        } catch (error) {
            console.error('error al guardar noticia', error);
            res.status(500).json({ error: error.message });
        }
    }

    actualizarNoticia = async (req, res) => {
        try {
            const id = req.params.id;
            const noticia = req.body;
            const noticiaActualizada = await this.servicioNoticias.actualizarNoticia(id, noticia);
            res.send(noticiaActualizada);
        } catch (error) {
            console.error('error al actualizar noticia', error);
            res.status(500).json({ error: error.message });
        }
    }

    borrarNoticia = async (req, res) => {
        try {
            const id = req.params.id;
            await this.servicioNoticias.borrarNoticia(id);
            res.send();
        } catch (error) {
            console.error('error al borrar noticia', error);
            res.status(500).json({ error: error.message });
        }
    }
}

export default ControladorNoticias;