//Usemos un arreglo de prueba:
let valoresOriginales = [1, 2, 3, 4, 5];

let nuevosValores = valoresOriginales.map(x => x + 1);
// console.log(nuevosValores);

// console.log("callbackTest");
// const callbackTest = x => x * 2
// console.log(valoresOriginales.map(callbackTest))


// Codifican nuestro funcion callback
//Recrear un callback de funcion map:
//Usemos un arreglo de prueba:
let arregloDePrueba = [1, 2, 3, 4, 5];

// Definimos funcion
const miFuncionMap = (arreglo, callback) => {
    let nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
        let nuevoValor = callback(arreglo[i])
        nuevoArreglo.push(nuevoValor)
    }
    return nuevoArreglo;
}


let nuevoArregloConMap = arregloDePrueba.map(x => x * 2)
let nuevoArregloPropio = miFuncionMap(arregloDePrueba, x => x * 2)

// console.log(nuevoArregloConMap);
// console.log(nuevoArregloPropio);


// Extra usando Prototype
Array.prototype.miFuncMap = function (callback) {
    let nuevoArreglo = []
    for (let i = 0; i < this.length; i++) {
        let nuevoValor = callback(this[i])
        nuevoArreglo.push(nuevoValor)
    }
    return nuevoArreglo;
}
// console.log(arregloDePrueba.miFuncMap(x => x * 2));



/*=============================================
=                   calcu callback            =
=============================================*/
const sumar = (numero1, numero2) => numero1 + numero2;
const restar = (numero1, numero2) => numero1 - numero2;
const multiplicar = (numero1, numero2) => numero1 * numero2;
const dividir = (numero1, numero2) => numero1 / numero2;

const realizarOperacion = (num1, num2, callback) => {
    console.log(`Voy a realizar una operacion, puede ser: ${callback}`);
    let res = callback(num1, num2)
    console.log(`El resultado de la operacion realizada es: ${res}`);
}

// realizarOperacion(2, 5, sumar)
// realizarOperacion(2, 5, restar)
// realizarOperacion(2, 5, multiplicar)
// realizarOperacion(2, 5, dividir)



/*=============================================
=                  callback  Hell            =
=============================================*/
// Función de devolución de llamada 1
function uno(callback) {
    setTimeout(function () {
        console.log("Uno");
        callback();
    }, 1000);
}

// Función de devolución de llamada 2
function dos(callback) {
    setTimeout(function () {
        console.log("Dos");
        callback();
    }, 1000);
}

// Función de devolución de llamada 3
function tres(callback) {
    setTimeout(function () {
        console.log("Tres");
        callback();
    }, 1000);
}

uno(function () {
    dos(function () {
        tres(function () {
            console.log("Fin del callback hell!!");
        })
    })
})