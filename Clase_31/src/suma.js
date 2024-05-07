// TODO - Implementar


// export default (num1, num2) => {

//     //Test 2: La funcion debe devolver 0 si no se pasa ningún parámetro:
//     if (!num1 && !num2) return 0;

//     // Test 1: La función debe devolver null si algun parametro no es numérico.
//     if (typeof num1 != "number" || typeof num2 != "number") return null


//     //Test 3: La función debe poder realizar la suma correctamente.
//     return num1 + num2
// }



// 2da version
// export default (...numbers) => {
//     console.log("Entrando a la suma con arreglo de numeros: ");
//     console.log(numbers);

//     //Test 2: La funcion debe devolver 0 si no se pasa ningún parámetro:
//     if (numbers.length === 0) return 0

//     // Test 1: La función debe devolver null si algun parametro no es numérico.
//     for (let index = 0; index < numbers.length; index++) {
//         if (typeof numbers[index] != "number") {
//             return null;
//         }
//     }


//     //Test 3-4: La función debe poder realizar la suma correctamente.
//     let result = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i];
//     }

//     console.log("Resultado de la suma:");
//     console.log(result);
//     return result;
// }


// REFACTOR
export default (...numbers) => {
    console.log("Entrando a la suma con arreglo de numeros: ");
    console.log(numbers);

    if (numbers.length === 0) return 0;

    if (!numbers.every(num => typeof num === "number")) return null;

    let result = 0;
    result = numbers.reduce((prev, current) => prev + current);

    console.log("Resultado de la suma:");
    console.log(result);
    return result;
};