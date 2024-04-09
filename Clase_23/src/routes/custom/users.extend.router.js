import CustomRouter from './custom.router.js';
import UserService from '../../services/db/users.service.js';
import { createHash, isValidPassword, generateJWToken } from '../../utils.js';

export default class UsersExtendRouter extends CustomRouter {
    init() {
        // Todas las req/res van dentro de este init()

        // Se instancia el service UserService 
        const userService = new UserService();

        this.get("/", ["PUBLIC"], (req, res) => {
            // res.send("Hola Coders")
            res.sendSuccess("Hola Coders")
        })

        this.get("/currentUser", ["USER", "USER_PREMIUM", "ADMIN"], (req, res) => {
            res.sendSuccess(req.user);
        });


        this.get("/premiumUser", ["USER_PREMIUM"], (req, res) => {
            res.sendSuccess(req.user);
        });

        this.get("/adminUser", ["ADMIN"], (req, res) => {
            res.sendSuccess(req.user);
        });



        this.post("/login", ['PUBLIC'], async (req, res) => {
            const { email, password } = req.body;
            try {
                const user = await userService.findByUsername(email);
                console.log("Usuario encontrado para login:");
                console.log(user);
                if (!user) {
                    console.warn("User doesn't exists with username: " + email);
                    return res.status(202).send({ error: "Not found", message: "Usuario no encontrado con username: " + email });
                }
                if (!isValidPassword(user, password)) {
                    console.warn("Invalid credentials for user: " + email);
                    return res.status(401).send({ status: "error", error: "El usuario y la contraseña no coinciden!" });
                }
                const tokenUser = {
                    name: `${user.first_name} ${user.last_name}`,
                    email: user.email,
                    age: user.age,
                    role: user.role
                };
                const access_token = generateJWToken(tokenUser); // Genera JWT Token que contiene la info del user
                console.log(access_token);
                res.send({ message: "Login successful!", access_token: access_token, id: user._id });
            } catch (error) {
                console.error(error);
                // return res.status(500).send({ status: "error", error: "Error interno de la applicacion." });

                return res.sendInternalServerError(error)
            }
        });

        this.post("/register", ["PUBLIC"], async (req, res) => {
            const { first_name, last_name, email, age, password, role } = req.body;
            console.log("Registrando usuario:");
            console.log(req.body);

            const exists = await userService.findByUsername(email);
            if (exists) {
                return res.status(400).send({ status: "error", message: "Usuario ya existe." });
            }
            const user = {
                first_name,
                last_name,
                email,
                age,
                password: createHash(password),
                role,
            };
            const result = await userService.save(user);
            res.status(201).send({ status: "success", message: "Usuario creado con extito con ID: " + result.id });
        });
    }
};