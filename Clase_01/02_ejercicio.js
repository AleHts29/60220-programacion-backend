// ¿Cómo lo hacemos? Definiremos la función “mostrarLista”, la cual recibirá un arreglo con elementos como parámetro.

// Si la lista está vacía, devolver un mensaje indicando “Lista vacía”.
// Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. Finalizar el proceso devolviendo la longitud de la lista (Utilizar template strings)
// Invocar la función con los casos de prueba.

const miArray = [1, 2, 3, 4, 5, 6]


function mostrarLista(array) {

    for (const element of array) {
        console.log(element);
    }

    if (array.length === 0) {
        console.log("Lista vacia!!");
    }

    return `Tamaño de la lista: ${array.length}`;
}

// Test01 lista vacia
let resultado_01 = mostrarLista([])
console.log(resultado_01);

// Test02 lista con datos
let resultado_02 = mostrarLista(miArray)
console.log(resultado_02);