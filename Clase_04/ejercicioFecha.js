const fs = require("fs");
const dirNameDate = "./fechas";
const fileNameDate = dirNameDate + "/fechaHora.txt";

// let data = "Hola Coders, estoy en un archivo! - utilizando callbacks"
let FyH = new Date().toString();

fs.mkdir(dirNameDate, { recursive: true }, (error) => {
    if (error) throw Error('No se pudo crear el directorio base!');

    // Escritura
    fs.writeFile(fileNameDate, FyH, (error) => {
        if (error) throw Error('No se pudo escribir el archivo!');
        // lectura del archivo
        fs.readFile(fileNameDate, 'utf-8', (error, contenido) => {
            if (error) throw Error("No se pudo leer el archivo!");
            console.log("Contenido del archivo:");
            console.log(contenido);
        })
    })
})