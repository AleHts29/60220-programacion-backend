import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
//Passport imports
import passport from 'passport';
import initializePassport from './config/passport.config.js';

//Routers
import viewsRouter from './routes/views.router.js';
import usersViewRouter from './routes/users.views.router.js';
import sessionsRouter from './routes/sessions.router.js'
import githubLoginViewRouter from './routes/github-login.views.router.js'

const app = express();

//JSON settings:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));


const MONGO_URL = "mongodb://localhost:27017/clase21?retryWrites=true&w=majority";
app.use(session({
    store: MongoStore.create({
        mongoUrl: MONGO_URL,
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
        ttl: 60
    }),
    secret: "coderS3cr3t",
    resave: false,
    saveUninitialized: true
}));

//Middlewares Passport
initializePassport();
app.use(passport.initialize());
// app.use(passport.session());

//Declare routers:
app.use("/", viewsRouter);
app.use("/users", usersViewRouter);
app.use("/api/sessions", sessionsRouter);
app.use("/github", githubLoginViewRouter);

const SERVER_PORT = 9090;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

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
