class User {
    constructor(nombre, apellido, username, password) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.username = username;
        this.password = password;
    }
};


class UserManager {
    #users;
    #userDirPath;
    #usersFilePath;
    #fileSystem;


    #crypto = require('crypto')
    #algorithm = 'aes-256-cbc';
    // la key y el iv son para validar
    #key = this.#crypto.randomBytes(32);
    #iv = this.#crypto.randomBytes(16);

    constructor() {
        this.#users = new Array();
        this.#userDirPath = './files'
        this.#usersFilePath = this.#userDirPath + '/UsuariosHash.json'
        this.#fileSystem = require('fs')
    }


    // Metodos
    #prepararDirectorioBase = async () => {
        //Creamos el directorio
        await this.#fileSystem.promises.mkdir(this.#userDirPath, { recursive: true });
        if (!this.#fileSystem.existsSync(this.#usersFilePath)) {
            //Se crea el archivo vacio.
            await this.#fileSystem.promises.writeFile(this.#usersFilePath, "[]");
        }
    }


    crearUsuario = async (nombre, apellido, username, password) => {
        let usuarioNuevo = new User(nombre, apellido, username, this.encrypt(password));
        //Le guardamos la llave y el iv al usuario para poder desencriptar o hashear.
        usuarioNuevo.key = this.#key.toString('hex');
        usuarioNuevo.iv = this.#iv.toString('hex');
        console.log("Crear Usuario: usuario a registrar:");
        console.log(usuarioNuevo);

        try {
            //Validamos que exista ya el archivo con usuarios sino se crea vacío para ingresar nuevos:
            await this.#prepararDirectorioBase();
            //Cargamos los usuarios encontrados para agregar el nuevo:
            await this.consultarUsuarios();
            if (this.#users.find(u => u.username === username)) {
                console.warn("Usuario ya existe, revise los datos nuevamente.");
            } else {
                this.#users.push(usuarioNuevo);
                console.log("Lista actualizada de usuaros: ");
                console.log(this.#users);
                //Se sobreescribe el archivos de usuarios para persistencia.
                await this.#fileSystem.promises.writeFile(this.#usersFilePath, JSON.stringify(this.#users));
            }
        } catch (error) {
            console.error(`Error creando usuario nuevo: ${JSON.stringify(usuarioNuevo)}, detalle del error: ${error}`);
            throw Error(`Error creando usuario nuevo: ${JSON.stringify(usuarioNuevo)}, detalle del error: ${error}`);
        }
    }


    consultarUsuarios = async () => {
        try {
            //Validamos que exista ya el archivo con usuarios sino se crea vacío para ingresar nuevos:
            await this.#prepararDirectorioBase();

            //leemos el archivo
            let usuariosFile = await this.#fileSystem.promises.readFile(this.#usersFilePath, "utf-8");

            //Cargamos los usuarios encontrados para agregar el nuevo:
            //Obtenemos el JSON String 
            //console.info("Archivo JSON obtenido desde archivo: ");
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

    // Simulamos un login
    validarUsuario = async (username, password) => {
        try {
            await this.consultarUsuarios();
            //Validar que el username exista:
            const user = this.#users.find(u => u.username === username);
            if (user) {
                console.log("Usuario encontrado: " + user.username);
                let newHashPassword = this.#dencrypt(password, user.key, user.iv);

                console.log(`Credenciales a evaluar:Password ingresado: ${newHashPassword}, password en obtenido del usuario: ${user.password}`);

                newHashPassword === user.password ? console.log("Login exitoso!")
                    : console.log("Login no fue exisoto, revise sus credenciales.");

            } else {
                console.warn("Usuario no encontrado por username: " + username);
            }
        } catch (error) {
            console.error(`Error validando credenciales del usuario: ${username}, 
                detalle del error: ${error}`);
            throw Error(`Error validando credenciales del usuario: ${username}, 
            detalle del error: ${error}`);
        }
    }

    // Metodos de encryptacion y configuraciones de la libreria Crypto
    #dencrypt = (text, key, iv) => {
        let cipher = this.#crypto.createCipheriv(this.#algorithm, Buffer.from(key, 'hex'), Buffer.from(iv, 'hex'));
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return encrypted.toString('hex');
    }

    encrypt = (text) => { //ejemplo -> recibe:123qwe y retorna:8683b4ac7e7c67c2de0b0b26ec201bab
        let cipher = this.#crypto.createCipheriv(this.#algorithm, Buffer.from(this.#key), this.#iv)
        let encrypted = cipher.update(text)
        encrypted = Buffer.concat([encrypted, cipher.final()])
        return encrypted.toString('hex')
    }

    // Ejemplo para ver como funciona la libreria
    decrypt = (text) => {
        console.log("Descifrando texto hasheado: " + text);
        let iv = Buffer.from(this.#iv, 'hex')
        let encryptedText = Buffer.from(text, 'hex');
        let decipher = this.#crypto.createDecipheriv(this.#algorithm, Buffer.from(this.#key), iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()])
        return decrypted.toString();
    }
}

module.exports = UserManager;