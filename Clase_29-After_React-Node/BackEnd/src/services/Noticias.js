import config from '../configs/configs.js'
import NoticiasFactoryDAO from './model/daos/NoticiasFactory.js';
import Noticias from './model/models/Noticias.js';

class ServicioNoticias {
    constructor() {
        this.noticiasDAO = NoticiasFactoryDAO.get(config.TIPO_PERSISTENCIA);
    }

    async obtenerNoticias(id) {
        const noticia = await this.noticiasDAO.obtenerNoticias(id);
        return noticia;
    }

    async guardarNoticia(noticia) {
        ServicioNoticias.validarNoticia(noticia, true);
        const noticiaDAO = await this.noticiasDAO.guardarNoticia(noticia);
        return noticiaDAO;
    }

    async actualizarNoticia(id, noticia) {
        ServicioNoticias.validarNoticia(noticia, false);
        const noticiaDAO = await this.noticiasDAO.actualizarNoticia(id, noticia);
        return noticiaDAO;
    }

    async borrarNoticia(id) {
        await this.noticiasDAO.borrarNoticia(id);
    }

    static validarNoticia(noticia, requerido) {
        try {
            Noticias.validar(noticia, requerido);
        } catch (error) {
            throw new Error(`la noticia posee un formato inválido ${error.details[0].message}`)
        }
    }
}

export default ServicioNoticias;