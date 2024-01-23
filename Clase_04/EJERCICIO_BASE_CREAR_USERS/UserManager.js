/**
 * Hands on Lab clase4:
 * User Manager con promesas y File System.
 */

class User {
    constructor(nombre, apellido, edad, curso) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.curso = curso;
    }
};

class UserManager {
    // # --> Hace referencia a que las variables son privadas
    #users;
    #userDirPath;
    #usersFilePath;
    #fileSystem;

    constructor() {
        this.#users = new Array();
        this.#userDirPath = "./files";
        this.#usersFilePath = this.#userDirPath + "/Usuarios.json";
        this.#fileSystem = require("fs");
    }

    crearUsuario = async (nombre, apellido, edad, curso) => {
        let usuarioNuevo = new User(nombre, apellido, edad, curso);
        console.log("Crear Usuario: usuario a registrar:");
        console.log(usuarioNuevo);
        try {
            //Creamos el directorio
            await this.#fileSystem.promises.mkdir(this.#userDirPath, { recursive: true });

            //Validamos que exista ya el archivo con usuarios sino se crea vacío para ingresar nuevos:
            if (!this.#fileSystem.existsSync(this.#usersFilePath)) {
                //Se crea el archivo vacio.
                await this.#fileSystem.promises.writeFile(this.#usersFilePath, "[]");
            }

            //leemos el archivo
            let usuariosFile = await this.#fileSystem.promises.readFile(this.#usersFilePath, "utf-8");
            console.info("Archivo JSON obtenido desde archivo: ");
            console.log(usuariosFile);

            // Agregamos al array la informacion que hay en el archivo y ademas hacemos un parseo de .json a Objeto.
            this.#users = JSON.parse(usuariosFile);
            console.log("Usuarios encontrados: ");
            console.log(this.#users);

            this.#users.push(usuarioNuevo);
            console.log("Lista actualizada de usuaros: ");
            console.log(this.#users);

            //Se sobreescribe el archivos de usuarios para persistencia.
            await this.#fileSystem.promises.writeFile(this.#usersFilePath, JSON.stringify(this.#users, null, 2, '\t'));

        } catch (error) {
            console.error(`Error creando usuario nuevo: ${JSON.stringify(usuarioNuevo)}, detalle del error: ${error}`);
            throw Error(`Error creando usuario nuevo: ${JSON.stringify(usuarioNuevo)}, detalle del error: ${error}`);
        }
    }

    consultarUsuarios = async () => {
        try {
            //Creamos el directorio
            await this.#fileSystem.promises.mkdir(this.#userDirPath, { recursive: true });

            //Validamos que exista ya el archivo con usuarios sino se crea vacío para ingresar nuevos:
            if (!this.#fileSystem.existsSync(this.#usersFilePath)) {
                //Se crea el archivo vacio.
                await this.#fileSystem.promises.writeFile(this.#usersFilePath, "[]");
            }

            //leemos el archivo
            let usuariosFile = await this.#fileSystem.promises.readFile(this.#usersFilePath, "utf-8");
            //Obtenemos el JSON String 
            console.info("Archivo JSON obtenido desde archivo: ");
            console.log(usuariosFile);

            this.#users = JSON.parse(usuariosFile);
            console.log("Usuarios encontrados: ");
            console.log(this.#users);

            return this.#users;
        } catch (error) {
            console.error(`Error consultando los usuarios por archivo, valide el archivo: ${this.#userDirPath}, 
                detalle del error: ${error}`);
            throw Error(`Error consultando los usuarios por archivo, valide el archivo: ${this.#userDirPath},
             detalle del error: ${error}`);
        }
    }
};
module.exports = UserManager; // 👈 Export class

