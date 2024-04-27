import NoticiasMongoDao from "./NoticiasMongoDao.js";

class NoticiasFactory {
    static get(tipo) {
        switch (tipo) {
            case 'MONGO':
                return new NoticiasMongoDao('mibase', 'noticias');
            default:
                return new NoticiasMongoDao('mibase', 'noticias');
        }
    }
}

export default NoticiasFactory;