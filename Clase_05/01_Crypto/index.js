const UserManager = require('./UserManagerCripto.js');

let userManager = new UserManager();


let persistirUsuario = async () => {
    try {

        // damos de alta un user
        await userManager.crearUsuario("Usuario1", "Apellido1", "username1", "unPasswordPlano")

        // Consultar usuarios
        let usuarios = await userManager.consultarUsuarios();
        console.log(`Usuarios encontrados en User Manager: ${usuarios.length}`);
        console.log(usuarios);


        // Ejemplo de Login
        // Datos Ejemplo
        const usernameX = "usernameX";
        const username1 = "username1";
        const password = "unPasswordPlano";

        await userManager.validarUsuario(usernameX, password)

    } catch (error) {
        console.error("Error Ejecutando la operacion.");
    }
}

persistirUsuario();



// Ejemplo de implemetacion de crypto
// let textoCifrado = userManager.encrypt("Hola Mundo")
// console.log("Cifrando texto: Hola mundo!");
// console.log("Resultado: ");
// console.log(textoCifrado);

// console.log("Descifrando texto: " + textoCifrado);
// let textoDescifrado = userManager.decrypt(textoCifrado);
// console.log("Texto descifrado: ");
// console.log(textoDescifrado);