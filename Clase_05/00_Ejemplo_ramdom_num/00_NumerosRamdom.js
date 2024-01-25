// const obj = {}



// crear un proyecto de node que genere 10000 num aleatorios en un rango de 1 a 20
// crear un objeto cuyas claves sean los numeros salidos, y el valor asociado es la cantidad de veces que salió dicho número

// let numeros = [];
// for (let i = 0; i < 10000; i++) {
//     numeros.push(Math.floor(Math.random() * 20) + 1);
// }

// let resultado = numeros.reduce((freq, numero) => {
//     freq[numero] = (freq[numero] || 0) + 1
//     return freq;
// }, {})

// console.log(numeros)
// console.log(resultado)


// 2da forma
const obj = {};

for (let i = 0; i < 50; i++) {
    let randomNumber = Math.ceil(Math.random() * 20);
    // if (obj[randomNumber]) {
    //     obj[randomNumber]++;
    // } else {
    //     obj[randomNumber] = 1;
    // }

    // Forma conrta de escribir lo mismo
    obj[randomNumber] ? obj[randomNumber]++ : obj[randomNumber] = 1
}

console.log(obj);