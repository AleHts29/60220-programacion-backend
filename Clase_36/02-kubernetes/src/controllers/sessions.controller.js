import UserServiceDao from '../services/dao/users.dao.js';
import { createHash, isValidPassword } from '../utils.js';

// const userServiceDao = new UserServiceDao();

export const loginUser = async (req, res) => {
    // TODO: this is temporally until connect DB
    res.status(503).send({ error: "unavailable", message: "Service unavailable temporally!" })

    // const {email, password} = req.body;
    // try {
    //     const user = await userServiceDao.findByUsername(email);
    //     console.log("Usuario encontrado para login:");
    //     console.log(user);
    //     if (!user) {
    //         console.warn("User doesn't exists with username: " + email);
    //         return res.status(204).send({error: "Not found", message: "Usuario no encontrado con username: " + email});
    //     }
    //     if (!isValidPassword(user, password)) {
    //         console.warn("Invalid credentials for user: " + email);
    //         return res.status(401).send({status:"error",error:"El usuario y la contraseña no coinciden!"});
    //     }
    //     const tokenUser= {
    //         name : `${user.first_name} ${user.last_name}`,
    //         email: user.email,
    //         age: user.age,
    //         role: user.role
    //     };
    //     //const access_token = generateJWToken(tokenUser); //No tokens for now.
    //     //console.log(access_token);
    //     //Con Cookie
    //     /*res.cookie('jwtCookieToken', access_token, {  //No cookies for now.
    //         maxAge: 60000,
    //         httpOnly: true
    //     });*/
    //     res.send({message: "Login successful!", payload: tokenUser});
    // } catch (error) {
    //     console.error(error);
    //     return res.status(500).send({status:"error",error:"Error interno de la applicacion."});
    // }
};

export const registerUser = async (req, res) => {

    // TODO: this is temporally until connect DB
    res.status(503).send({ error: "unavailable", message: "Service unavailable temporally!" })

    // const { first_name, last_name, email, age, password } = req.body;
    // console.log("Registrando usuario:");
    // console.log(req.body);

    // const exists = await userServiceDao.findByUsername(email);
    // if (exists) {
    //     return res.status(400).send({ status: "error", message: "Usuario ya existe." });
    // }
    // const user = {
    //     first_name,
    //     last_name,
    //     email,
    //     age,
    //     password: createHash(password)
    // };
    // const result = await userServiceDao.save(user);
    // res.status(201).send({ status: "success", message: "Usuario creado con extito con ID: " + result.id });
};