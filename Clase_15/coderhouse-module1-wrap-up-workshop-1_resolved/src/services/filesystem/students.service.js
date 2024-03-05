import __dirname from '../../util.js';
import fileSystem from 'fs';

export default class StudentService {
    #students;
    #dirPath;
    #filePath;
    #fileSystem;


    constructor(){
        this.#students = new Array();
        this.#dirPath = __dirname+'/files';
        this.#filePath = this.#dirPath+"/students.json";
        this.#fileSystem = fileSystem;
    }

    #prepararDirectorioBase = async () =>{
         //Creamos el directorio
         await this.#fileSystem.promises.mkdir(this.#dirPath, { recursive: true });
        if(!this.#fileSystem.existsSync(this.#filePath)) {
            //Se crea el archivo vacio.
            await this.#fileSystem.promises.writeFile(this.#filePath, "[]");
        }
    }

    save = async (student) => {
        console.log("Guardar recurso:");
        console.log(student);
        student.id = Math.floor(Math.random()*20000+1);
        try {
            await this.#prepararDirectorioBase();
            this.#students = await this.getAll();
            this.#students.push(student);
            //Se sobreescribe el archivos de usuarios para persistencia.
            await this.#fileSystem.promises.writeFile(this.#filePath, JSON.stringify(this.#students));
            return student;
            
        } catch (error) {
            console.error(`Error guardando recurso: ${JSON.stringify(usuarioNuevo)}, detalle del error: ${error}`);
            throw Error(`Error guardando recurso: ${JSON.stringify(usuarioNuevo)}, detalle del error: ${error}`);
        }
    }

    getAll = async () =>{
        try {
            //Validamos que exista ya el archivo con usuarios sino se crea vacío para ingresar nuevos:
            await this.#prepararDirectorioBase();
            //leemos el archivo
            let data = await this.#fileSystem.promises.readFile(this.#filePath, "utf-8");
            //Cargamos los usuarios encontrados para agregar el nuevo:
            //Obtenemos el JSON String 
            //console.info("Archivo JSON obtenido desde archivo: ");
            console.log(data);
            this.#students = JSON.parse(data);
            console.log("Usuarios encontrados: ");
            console.log(this.#students);
            return this.#students;
        } catch (error) {
            console.error(`Error consultando los usuarios por archivo, valide el archivo: ${this.#dirPath}, 
                detalle del error: ${error}`);
            throw Error(`Error consultando los usuarios por archivo, valide el archivo: ${this.#dirPath},
             detalle del error: ${error}`);
        }
    }
};