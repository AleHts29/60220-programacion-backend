import { Router } from 'express';
import cookieParser from 'cookie-parser';

const router = Router();

// Cookie sin firma 
// router.use(cookieParser());


// Cookie Con firma 
router.use(cookieParser('CoderS3cr3tC0d3'));


router.get('/', (req, res) => {
    res.render('index', {})
});

router.get('/setcookie', (req, res) => {
    // // Sin firma
    // res.cookie("CoderCookie", "Esto es una Cookie de prueba - Cookie set", { maxAge: 80000 }).send('Cookie asignada con exito!!')


    // Con firma
    res.cookie("CoderCookie", "Esto es una Cookie de prueba - Cookie set", { maxAge: 80000, signed: true }).send('Cookie asignada con exito!!')
});



router.get('/getcookie', (req, res) => {
    // res.send(req.cookies)

    res.send(req.signedCookies)
});


router.get('/deletecookie', (req, res) => {
    res.clearCookie('CoderCookie').send('Cookie borrada!!')
});


/*=============================================
=                   2da Parte                 =
=============================================*/
router.get('/session', (req, res) => {
    if (req.session.counter) {
        req.session.counter++
        res.send(`Se ha visitado este sitio ${req.session.counter} veces.`);
    } else {
        req.session.counter = 1;
        res.send("Bienvenido!")
    }
});

// destruir la session
router.get('/logout', (req, res) => {
    req.session.destroy(error => {
        if (error) {
            res.json({ error: "error logout", mensaje: "Error al cerrar la sesion" })
        }
        res.send("Session cerrada correctamente")
    })
});

// http://localhost:9090/login?username=pepe&password=pepepass
router.get('/login', (req, res) => {
    const { username, password } = req.query;
    if (username !== 'pepe' || password !== 'pepepass') {
        return res.status(401).send("Login Failed, check your credentials.");
    } else {
        req.session.user = username;
        req.session.admin = false;

        res.send('Login Success!!')
    }
});


// Auth Middleare
function auth(req, res, next) {
    if (req.session.user === 'pepe' && req.session.admin) {
        return next()
    } else {
        return res.status(403).send("Usuario no autorizado para ingresar a este recurso.");
    }
}



router.get('/private', auth, (req, res) => {
    res.send("si estas viendo esto es porque eres un susario Admin y estas logueado, con session activa")
});

export default router;

