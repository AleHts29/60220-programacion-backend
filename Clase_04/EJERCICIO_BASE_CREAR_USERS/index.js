/**
 * Hands on Lab:
 * Manager de Usuarios
 * FS con Promises
 */

const UserManager = require("./UserManager.js");
let userManager = new UserManager(); // se crea la instacia de la clase
console.log(userManager);


let persistirUsuario = async () => {
    await userManager.crearUsuario("Usuario_05", "Apellido_05", 20, "Backend");
    let usuarios = await userManager.consultarUsuarios();
    console.log(`Usuarios encontrados en User Manager: ${usuarios.length}`);
    console.log(usuarios);
};
persistirUsuario();