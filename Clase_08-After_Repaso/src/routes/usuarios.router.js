import {Router} from "express";
import UserManager from "../service/UserManagerCripto.js";

const userManager = new UserManager();
const router = Router();


// construir los endpoints
router.get("/", async (req, res) => {
    console.log("Consultando usuarios GET.");
    try {
        let usuarios = await userManager.consultarUsuarios();
        const limit = req.query.limit;
        if (limit){
            usuarios = usuarios.slice(0, parseInt(limit));
        }
        res.send(usuarios);
    }catch (error){
        console.log("Error consultando los usuarios. Error: " + error); 
        res.status(500, {error: "Error consultando los usuario", mensagge: error});
    }
});

router.post("/", async (req, res) =>{
    try {
        console.log("llamando a Crear usuario:");
        const user = req.body;
        await userManager.crearUsuario(user.name, user.lastName, user.username, user.password);
        res.status(201).send({mensaje: "Usuario creado con éxito! Con username:" + user.username});
    } catch (error) {
        console.log("Error guardando usuario. Error: " + error); 
        res.status(500).send({error: "Error guardando usuario", mensagge: error});
    }
});

export default router;