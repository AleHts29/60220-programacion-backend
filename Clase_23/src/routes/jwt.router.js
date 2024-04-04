import { Router } from 'express';
import userModel from '../services/db/models/user.model.js';
import {isValidPassword} from '../utils.js';
import { generateJWToken } from '../utils.js';

const router = Router();

router.post("/login", async (req, res)=>{
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({email: email});
        console.log("Usuario encontrado para login:");
        console.log(user);
        if (!user) {
            console.warn("User doesn't exists with username: " + email);
            return res.status(204).send({error: "Not found", message: "Usuario no encontrado con username: " + email});
        }
        if (!isValidPassword(user, password)) {
            console.warn("Invalid credentials for user: " + email);
            return res.status(401).send({status:"error",error:"El usuario y la contraseña no coinciden!"});
        }
        const tokenUser= {
            name : `${user.first_name} ${user.last_name}`,
            email: user.email,
            age: user.age,
            role: user.role
        };
        const access_token = generateJWToken(tokenUser);
        console.log(access_token);
        res.send({message: "Login successful!", access_token: access_token});
    } catch (error) {
        console.error(error);
        return res.status(500).send({status:"error",error:"Error interno de la applicacion."});
    }
    
});

export default router;