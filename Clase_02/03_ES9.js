const persona = {
    nombre: 'Max',
    edad: 29,
    saludar() {
        console.log('Hola, Yo soy ' + this.nombre);
    }
};

//Y usemos un array de ejemplo:
const hobbiesOriginal = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
//Copiando arrays
console.log("\n************** Copiando arrays: ************ \n");
const copiedSlicedArray = hobbiesOriginal.slice(1, 3);
console.log(copiedSlicedArray);

const copiedNestedArray = [hobbiesOriginal]
console.log(copiedNestedArray);


//Usando operador Spread:
console.log("\n************** Spread operator: ************ \n");
const copiedArrayWithSpread = [...hobbiesOriginal]
console.log("copiedArrayWithSpread: ");
console.log(copiedArrayWithSpread);

// También nos sirve para copiar objetos:
const personCopiedSpread = { ...persona };
console.log("Persona copiada usando spread: ");
console.log(personCopiedSpread);


//Rest Operator:
console.log("\n************** Rest operator: ************ \n");
//Depende como usemos el (...) operator se comporta como un spread or rest.
const toArray = (...args) => { //En este caso estamos usando el operador como argumento
    return args;               // por esto, los argumentos se unen y se constuye un array con los mismos.
}
// console.log(toArray(1, 2, 3, 4));



// _02
//Objects Destructuring 
console.log("\n************** Objects Destructuring: ************ \n");
const printNameStandard = (personParam) => {
    console.log("printNameStandard = (personParam)");
    console.log(personParam.nombre);
    personParam.saludar();
};
printNameStandard(persona);


// /** Usando una función con object destructing */
const printNameDestruc = ({ nombre }) => {//Esto permite recibir un objeto y mapearlo a un atributo específico.
    console.log("printNameDestruc = ({nombre}) =>");
    console.log(nombre);
};
printNameDestruc(persona);

//Esto es posible también, no es del todo corecto como buena practica.
console.log("const {nombre, edad} = persona;");
const { nombre, edad } = persona;
console.log(nombre, edad);