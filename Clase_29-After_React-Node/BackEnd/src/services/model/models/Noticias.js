import Joi from 'joi';

class Noticias {
    constructor(titulo, cuerpo, autor, imagen, email, vista) {
        this.titulo = titulo;
        this.cuerpo = cuerpo;
        this.autor = autor;
        this.imagen = imagen;
        this.email = email;
        this.vista = vista;
    }

    static validar(noticia, requerido) {
        const NoticiasSchema = Joi.object({
            titulo: requerido ? Joi.string().required() : Joi.string(),
            cuerpo: requerido ? Joi.string().required() : Joi.string(),
            autor: requerido ? Joi.string().required() : Joi.string(),
            imagen: requerido ? Joi.string().required() : Joi.string(),
            email: requerido ? Joi.string().required() : Joi.string(),
            vista: requerido ? Joi.boolean().required() : Joi.boolean()
        });

        const { error } =  NoticiasSchema.validate(noticia);

        if (error) {
            throw error;
        }
    }
}

export default Noticias;