import {Router} from 'express';
import cookieParser from 'cookie-parser';

const router = Router();

//router.use(cookieParser());
router.use(cookieParser("CoderS3cr3tC0d3"));

router.get('/',(req,res)=>{
    res.render('index',{})
});

//Session management:
router.get("/session", (req, res) => {
    if (req.session.counter) {
        req.session.counter++;
        res.send(`Se ha visitado este sitio ${req.session.counter} veces.`);
    } else {
        req.session.counter = 1;
        res.send("Bienvenido!");
    }
});

//Login
router.get('/login', (req, res) => {
    const {username, password} = req.query;
    if (username !== 'pepe' || password !== 'pepepass'){
        return res.status(401).send("Login Failed, check your username and password.");
    } else {
        req.session.user = username;
        req.session.admin = true;
        res.send('Login Successful !');
    }
});

router.get("/logout", (req, res) => {
    req.session.destroy(error => {
        if (error){
            res.json({error: "error logout", mensaje: "Error al cerrar la sesion"});
        }
        res.send("Sesion cerrada correctamente.");
    });
});

//Auth middleware:
function auth(req, res, next){
    if (req.session.user === 'pepe' && req.session.admin) {
        return next();
    } else{
        return res.status(403).send("Usuario no autorizado para ingresar a este recurso.");
    }
    
}

router.get('/private', auth, (req, res) =>{
    res.send("Si estas viendo esto es porque pasaste la autorización a este recurso!");
});

export default router;