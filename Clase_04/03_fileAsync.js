/**
 * Fs Asincrono:
 * 
- writeFile = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
- readFile = Para obtener el contenido de un archivo. Como pide información, su callback es de la forma: (error, resultado)=>
- appendFile = Para añadir contenido a un archivo. ¡No se sobreescribe!
- unlink = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
*/

const { error } = require("console");
const fs = require("fs");
const dirNameAsync = "./files2";
const fileNameAsync = dirNameAsync + "/ejemploCallback.txt"; // --> ./files2/ejemploCallback.txt



let data = "Hola Coders, estoy en un archivo! - utilizando callbacks";

fs.mkdir(dirNameAsync, { recursive: true }, (error) => {
    if (error) throw Error('No se pudo crear el directorio base!')

    // Escritura
    fs.writeFile(fileNameAsync, data, (error) => {
        if (error) throw Error('No se pudo escribir el archivo!')
    })


    // Lectura del archivo
    fs.readFile(fileNameAsync, 'utf-8', (error, contenido) => {
        if (error) throw Error("No se pudo leer el archivo!");
        console.log("Contenido del archivo:");
        console.log(contenido);

        // Agregamos Contenido
        fs.appendFile(fileNameAsync, " -- Otro ejemplo", (error) => {
            if (error) throw Error("No se pudo agregar nuevo contenido!");
            // Lectura
            fs.readFile(fileNameAsync, 'utf-8', (error, contenido) => {
                if (error) throw Error("No se pudo leer el archivo!");
                console.log("Contenido del archivo:");
                console.log(contenido);

                // Eliminamos el file
                fs.unlink(fileNameAsync, (error) => {
                    if (error) throw Error("No se pudo borrar archivo.");
                });
            })
        })
    })
})
