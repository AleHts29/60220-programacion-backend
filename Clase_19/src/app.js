import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

// dependencias para las sessions
import session from 'express-session';
import FileStore from 'session-file-store';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';

//import Routers
import viewsRouter from './routes/views.router.js';
import usersViewRouter from './routes/users.views.router.js';
import sessionsRouter from './routes/sessions.router.js'

const app = express();

//JSON settings:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuraciones handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));


//Conectamos nuestra session con el file storage.
// const fileStorage = FileStore(session);


const MONGO_URL = "mongodb://localhost:27017/clase19?retryWrites=true&w=majority";
/*=============================================
=                   session                   =
=============================================*/
app.use(session({
    //ttl: Time to live in seconds,
    //retries: Reintentos para que el servidor lea el archivo del storage.
    //path: Ruta a donde se buscará el archivo del session store.

    // // Usando session-file-storage
    // store: new fileStorage({ path: './sessions', ttl: 45, retries: 0 }),

    store: MongoStore.create({
        mongoUrl: MONGO_URL,
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
        ttl: 10 * 60
    }),
    secret: "coderS3cr3t",
    resave: false, //guarda en memoria
    saveUninitialized: true, //lo guarda a penas se crea
}));


/*=============================================
=                  Routers                    =
=============================================*/
app.use("/", viewsRouter);
app.use("/users", usersViewRouter);
app.use("/api/sessions", sessionsRouter);



const SERVER_PORT = 9090;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});



/*=============================================
=             connectMongoDB                  =
=============================================*/
const connectMongoDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Conectado con exito a MongoDB usando Moongose.");
    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
};
connectMongoDB();
