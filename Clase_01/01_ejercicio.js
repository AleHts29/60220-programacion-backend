// let i = 17
// const testScope = function () {
//     let i = 0
//     console.log(i);

//     if (true) {
//         const variable = 12
//         console.log(variable)
//     }

//     // console.log(variable);
//     return i + 5;
// }


// let test = testScope()
// console.log(test);

// console.log(i);


// let nombre = "Juan";
// nombre = "Gaston"

// console.log(nombre);



/*=============================================
=                   Constantes               =
=============================================*/

// Copia por referencia
let obj1 = {
    name: "Nico",
    edad: 25
}
console.log(obj1);

// let obj2 = obj1
const obj2 = { ...obj1 }
console.log(obj2);

obj2.name = 'Lucas'
obj2.pais = "Arg"

console.log('Objeto 2');
console.log(obj2)

console.log('Objeto 1');
console.log(obj1)



/*=============================================
=                   Funciones               =
=============================================*/

// const suma = (a, b) => {
//     let result;
//     result = a + b;
//     return result;
// }

// console.log(suma(2, 3));

// Refactor
const suma = (a, b) => a + b;
console.log(suma(2, 3));