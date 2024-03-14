import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';


import session from 'express-session';

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars');



// 2da parte
app.use(session({
    secret: 'coderS3cr3t',
    resave: true,
    saveUninitialized: true
}))

app.use('/', viewsRouter);

const SERVER_PORT = 9090;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});
