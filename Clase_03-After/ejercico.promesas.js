const sumaConPromesas = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log(`Resiviendo promesa para SUMA: ${a}+${b}`);
        // validaciones
        if (a, b === 0) {
            reject('Operacion incorecta!!')
        } else {
            resultado = a + b;
            resolve(
                // Operador Ternario --> Condicion ? true : fale
                resultado < 0 ? reject('La calculadora solo debe devolver valores positivos!!') : resultado
            )
        }
    })

}

const restaConPromesas = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log(`Resiviendo promesa para RESTA: ${a}-${b}`);
        // validaciones
        if (a, b === 0) {
            reject('Operacion incorecta!!')
        } else {
            resultado = a - b;
            resolve(
                // Operador Ternario --> Condicion ? true : fale
                resultado < 0 ? reject('La calculadora solo debe devolver valores positivos!!') : resultado
            )
        }
    })
}

const multiplicacionConPromesas = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log(`Resiviendo promesa para MULTIPLICACION: ${a}*${b}`);
        // validaciones
        resultado = a * b;
        resolve(
            // Operador Ternario --> Condicion ? true : fale
            resultado < 0 ? reject('La calculadora solo debe devolver valores positivos!!') : resultado
        )

    })
}

const divideConPromesas = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log(`Resiviendo promesa para Dividir: ${a} / ${b}`);
        if (b === 0) {
            reject('Operacion no valida!!')
        } else {
            resultado = a / b;
            resolve(
                // Operador Ternario --> Condicion ? true : fale
                resultado < 0 ? reject('La calculadora solo debe devolver valores positivos!!') : resultado
            )
        }
    })
}


// Definimos ambiente async 
const calulos = async (num1, num2, opCallback) => {
    console.log('Se esta ejecutando la funcion Async');
    try {
        let result = await opCallback(num1, num2);
        console.log(result);
    } catch (error) {
        console.log("No se pudo cumplir la promesa, Error: " + error);
    }
}

calulos(-2, 1, sumaConPromesas);
calulos(-2, 1, restaConPromesas);
calulos(-2, 1, multiplicacionConPromesas);
calulos(-2, 1, divideConPromesas);

