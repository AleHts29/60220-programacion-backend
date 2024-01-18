const dividirConPromesa = (dividendo, divisor) => {

    // Definimos la Promesa
    return new Promise((resolve, reject) => {
        console.log(`Recibiendo promesa para dividir: ${dividendo} / ${divisor}`);

        if (divisor === 0) {
            reject('No se puede dividir por cero')
        }
        resolve(dividendo / divisor)

    })
}

console.log("Dividiendo usando Promesas, Resultado:");
// console.log(dividirConPromesa(2, 5));
// console.log(dividirConPromesa(2, 0));


// implementacion con then y catch
dividirConPromesa(5, 0)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))
