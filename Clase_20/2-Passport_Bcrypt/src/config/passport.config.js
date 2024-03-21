import passport from 'passport';
import passportLocal from 'passport-local';
import userModel from '../models/user.model.js';
import { createHash, isValidPassword } from '../utils.js';

//Declaramos nuestra estrategia:
const localStrategy = passportLocal.Strategy;

const initializePassport = () => {

    /**
      *  Inicializando la estrategia local, username sera para nosotros email.
      *  Done(equivalente al next) será nuestro callback
     */

    passport.use('register', new localStrategy(
        // passReqToCallback: para convertirlo en un callback de request, para asi poder iteracturar con la data que viene del cliente
        // usernameField: renombramos el username
        { passReqToCallback: true, usernameField: 'email' },

        // este seria nuestro callback donde hacemos todas las validaciones
        // done: seria el equivalente al next() y con este done le indicamos que terminamos X validacion.
        async (req, username, password, done) => {
            const { first_name, last_name, email, age } = req.body
            try {
                const exists = await userModel.findOne({ email })
                if (exists) {
                    console.log("El usuario ya existe!!");
                    return done(null, false)
                }

                //  Si el user no existe en la DB
                const user = {
                    first_name,
                    last_name,
                    email,
                    age,
                    password: createHash(password)
                }

                const result = await userModel.create(user);

                // TODO OK
                return done(null, result)
            } catch (error) {
                return done("Error registrando el usuario: " + error)
            }
        }
    ))


    // Estrategia de login
    passport.use('login', new localStrategy(
        { passReqToCallback: true, usernameField: 'email' },
        async (req, username, password, done) => {
            try {
                const user = await userModel.findOne({ email: username })
                console.log("Usuario encontrado para login:");
                console.log(user);

                if (!user) {
                    console.warn("Invalid credentials for user: " + username);
                    return done(null, false)
                }

                // Validamos usando Bycrypt credenciales del usuario
                if (!isValidPassword(user, password)) {
                    console.warn("Invalid credentials for user: " + username);
                    return done(null, false)
                }
                // req.session.user = {
                //     name: `${user.first_name} ${user.last_name}`,
                //     email: user.email,
                //     age: user.age
                // }

                return done(null, user)
            } catch (error) {
                return done(error)
            }
        }
    ))





    //Funciones de Serializacion y Desserializacion
    passport.serializeUser((user, done) => {
        done(null, user._id)
    })

    passport.deserializeUser(async (id, done) => {
        try {
            let user = await userModel.findById(id);
            done(null, user)
        } catch (error) {
            console.error("Error deserializando el usuario: " + error);
        }
    })

};




// La serialización de Passport se refiere al proceso de convertir el objeto de usuario de Passport en una cadena que puede ser almacenada o transmitida de manera segura. Esta cadena se utiliza típicamente para mantener la sesión de usuario entre las solicitudes del cliente y el servidor. 

// La serialización es importante para persistir la información de autenticación del usuario de una manera que sea eficiente y segura

// estas funciones permiten a Passport.js manejar la información del usuario durante el proceso de autenticación, serializando y deserializando los usuarios para almacenar y recuperar información de la sesión. Estas funciones son esenciales cuando se implementa la autenticación de usuarios en una aplicación Node.js utilizando Passport.js.

export default initializePassport;
