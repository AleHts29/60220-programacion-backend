/**** Actividad en Clase ***************/
/**
 * Dados los objetos indicados:
 * Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades), 
 * consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
 * Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)
 */

const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
]

let newArray = [];
let totalCantProductos = 0;


objetos.forEach(objeto => {
    const keys = Object.keys(objeto);

    keys.forEach(key => {
        if (!newArray.includes(key)) newArray.push(key);
    })

    let soloValores = Object.values(objeto)
    // Calculamos el total
    let totalProductos = soloValores.reduce((Acc, Ini) => {
        return Acc + Ini
    })
    totalCantProductos += totalProductos;
})

console.log(newArray);
console.log(totalCantProductos)


// refactor
// const [a, b] = objetos
// const listA = [...Object.keys(a), ...Object.keys(b)]
// const values = [...Obiect.values(a), ...Object.values(b)].reduce((acc, value) => acc + value)
// console.log(listA);
// console.log(values);


// Usando Nullish
let test = "HOLA";
let nullish = test ?? "Sin Valor"
console.log(nullish);

