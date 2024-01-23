/**
 * Manejo de archivos usando NodeJs
 * Implementación usando nodejs:fs
 */

/**
 * Fs Sincrono:
 * 
    - writeFileSync = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
    - readFileSync = Para obtener el contenido de un archivo.
    - appendFileSync = Para añadir contenido a un archivo. ¡No se sobreescribe!
    - unlinkSync = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
    - existsSync = Corrobora que un archivo exista!
*/

const { log } = require('console');
const fs = require('fs');

const dirName = './files'
const fileName = dirName + "/ejemplo.txt"

console.log("Generando escritura de archivos Sync con fileName: " + fileName);
if (!fs.existsSync(dirName)) fs.mkdirSync(dirName)
fs.writeFileSync(fileName, "Hola Coders, estoy en un archivo!!")


if (fs.existsSync(fileName)) {
    // Lectura
    console.log("Archivo creado con exito en la ruta: " + fs.realpathSync(fileName));

    let contenido = fs.readFileSync(fileName, 'utf-8')
    console.log(contenido);


    // Agregar mas contenido
    fs.appendFileSync(fileName, "\n--- Mas conternido!!")
    contenido = fs.readFileSync(fileName, 'utf-8')
    console.log(contenido);


    // Borrado 
    console.log("Borrando archivo..");
    fs.unlinkSync(fileName);

    // Si sucede algun error al borrar
    fs.existsSync(fileName) ? console.log("El archivo no se pudo borrar..") : console.log("Archivo borrado");
} else {
    console.error("Error creando el archivo!!");
}