import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import session from 'express-session';

// import FileStore from 'session-file-store';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';

//Routers
import viewsRouter from './routes/views.router.js';
import usersViewRouter from './routes/users.views.router.js';
import sessionsRouter from './routes/sessions.router.js'

const app = express();
//Conectamos nuestra session con el file storage.
// const fileStorage = FileStore(session);

//JSON settings:
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views')
app.set('view engine','handlebars');
app.use(express.static(__dirname+'/public'));

//const MONGO_URL = "mongodb+srv://juanrotoes:C0d3rH0us3-b4ck3nd@cluster0.t39whxc.mongodb.net/clase19?retryWrites=true&w=majority";
const MONGO_URL = "mongodb://localhost:27017/clase19?retryWrites=true&w=majority";
app.use(session({
    //ttl: Time to live in seconds,
    //retries: Reintentos para que el servidor lea el archivo del storage.
    //path: Ruta a donde se buscará el archivo del session store.
    // store: new fileStorage({path : "./sessions", ttl:15, retries: 0}),
    store: MongoStore.create({
        mongoUrl: MONGO_URL,
        mongoOptions: {useNewUrlParser: true, useUnifiedTopology: true},
        ttl: 30
    }),
    secret: "coderS3cr3t",
    resave : false, //guarda en memoria
    saveUninitialized: true //lo guarda a penas se crea
}));

//Declare routers:
app.use("/",viewsRouter);
app.use("/users", usersViewRouter);
app.use("/api/sessions", sessionsRouter);

const SERVER_PORT = 9090;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

const connectMongoDB = async ()=>{
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Conectado con exito a MongoDB usando Moongose.");
    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
};
connectMongoDB();
