import __dirname from '../../util.js';
import fileSystem from 'fs';

export default class CourseService {
    #courses;
    #dirPath;
    #filePath;
    #fileSystem;


    constructor(){
        this.#courses = new Array();
        this.#dirPath = __dirname+'/files';
        this.#filePath = this.#dirPath+"/courses.json";
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

    save = async (curso) => {
        console.log("Guardar recurso:");
        console.log(curso);
        curso.id = Math.floor(Math.random()*20000+1);
        try {
            await this.#prepararDirectorioBase();
            this.#courses = await this.getAll();
            this.#courses.push(curso);
            //Se sobreescribe el archivos de cursos para persistencia.
            await this.#fileSystem.promises.writeFile(this.#filePath, JSON.stringify(this.#courses));
            
        } catch (error) {
            console.error(`Error guardando recurso: ${JSON.stringify(usuarioNuevo)}, detalle del error: ${error}`);
            throw Error(`Error guardando recurso: ${JSON.stringify(usuarioNuevo)}, detalle del error: ${error}`);
        }
    }

    getAll = async () =>{
        try {
            //Validamos que exista ya el archivo con cursos sino se crea vacío para ingresar nuevos:
            await this.#prepararDirectorioBase();
            //leemos el archivo
            let data = await this.#fileSystem.promises.readFile(this.#filePath, "utf-8");
            //Obtenemos el JSON String 
            //console.info("Archivo JSON obtenido desde archivo: ");
            console.log(data);
            this.#courses = JSON.parse(data);
            console.log("Cursos encontrados: ");
            console.log(this.#courses);
            return this.#courses;
        } catch (error) {
            console.error(`Error consultando los cursos por archivo, valide el archivo: ${this.#dirPath}, 
                detalle del error: ${error}`);
            throw Error(`Error consultando los cursos por archivo, valide el archivo: ${this.#dirPath},
             detalle del error: ${error}`);
        }
    }
};