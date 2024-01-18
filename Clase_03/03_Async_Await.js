const dividirConPromesa = (dividendo, divisor) => {
    // Definimos la Promesa
    return new Promise((resolve, reject) => {
        console.log(`Recibiendo promesa para dividir: ${dividendo} / ${divisor}`);

        // if (divisor === 0) {
        //     reject('No se puede dividir por cero')
        // }
        // resolve(dividendo / divisor)

        setTimeout(() => {
            if (divisor === 0) {
                reject('No se puede dividir por cero')
            }
            resolve(dividendo / divisor)
        }, 2000)

    })
}

const dividirConPromesa_02 = (dividendo, divisor) => {
    // Definimos la Promesa
    return new Promise((resolve, reject) => {
        console.log(`Recibiendo promesa para dividir: ${dividendo} / ${divisor}`);

        if (divisor === 0) {
            reject('No se puede dividir por cero')
        }
        resolve(dividendo / divisor)

    })
}


const funcionAsincronica = async (a, b) => {
    console.log('Ejecutando div por func Async()');
    try {
        let resultado = await dividirConPromesa(a, b);
        let resultado_02 = await dividirConPromesa(resultado, b);
        console.log(resultado_02);
    } catch (error) {
        console.log('No se pudo cumplir la promesa, Error: ' + error);
    }
}

funcionAsincronica(9, 3)