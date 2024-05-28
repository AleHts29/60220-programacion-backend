import { Router } from 'express';
import {isValidPassword, generateJWToken, createHash} from '../util.js';
//Service import
import {studentService} from '../services/repository/services.js';
import MailingService from '../services/email/mailing.js';

const router = Router();

router.post("/login", async (req, res)=>{
    const {email, password} = req.body;
    try {
        const user = await studentService.findByUsername(email);
        console.log("Usuario encontrado para login:");
        console.log(user);
        if (!user) {
            console.warn("User doesn't exists with username: " + email);
            return res.status(400).send({error: "Not found", message: "Usuario no encontrado con username: " + email});
        }
        if (!isValidPassword(user, password)) {
            console.warn("Invalid credentials for user: " + email);
            return res.status(401).send({status:"error",error:"El usuario y la contraseña no coinciden!"});
        }
        const tokenUser= {
            name : `${user.name} ${user.lastName}`,
            email: user.email,
            age: user.age,
            role: user.role
        };
        const access_token = generateJWToken(tokenUser);
        console.log(access_token);
        //Con Cookie
        res.cookie('jwtCookieToken', access_token, {
            maxAge: 120000,
            httpOnly: true
        });
        res.send({message: "Login successful!"});
        //const access_token = generateJWToken(tokenUser); //-->Con access_token
    } catch (error) {
        console.error(error);
        return res.status(500).send({status:"error",error:"Error interno de la applicacion."});
    }
});

//Agregar metodo de registrar estudiante:
router.post("/register",  async (req, res)=>{
    const { name, lastName, email, age, password} = req.body;
    console.log("Registrando usuario:");
    console.log(req.body);

    const exists = await studentService.findByUsername(email);
    if (exists){
        return res.status(401).send({status: "error", message: "Usuario ya existe."});
    }
    const user = {
        name,
        lastName,
        email,
        age,
        password: createHash(password)
    };
    const result = await studentService.createStudent(user);
    res.status(201).send({status: "success", message: "Usuario creado con extito con ID: " + result.id});
    const miCorreo = {
        from:'CoderTests',
        to: user.email,
        subject:"Te has registrado con éxito!",
        html:`<div><h1>¡Felicidades! ${user.name}</h1>
        <p> Bienvenido! Esperamos que lo pases muy bien y aprendas mucho</p>
        </div>`
    }

    const mailingService = new MailingService();
    const correo = await mailingService.sendSimpleMail(miCorreo)

});

export default router;