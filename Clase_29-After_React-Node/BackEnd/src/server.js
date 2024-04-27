import config from './configs/configs.js';
import express from 'express';
import cors from 'cors';
import RouterNoticias from './router/Noticias.js';

const app = express();

app.use(express.json());
app.use(cors());

const routerNoticias = new RouterNoticias();
app.use('/noticias', routerNoticias.start());

const PORT = config.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
});

server.on('error', error => console.log('Servidor express con error', error));
