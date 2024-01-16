//Ejemplo de Array.map()

const array = [1, 2, 3, 4, 5];
// console.log(array[3]);

const numeros = array.map((num) => num * 2)
// console.log(numeros);


//ES7
//Uso de exponencial ** como remplazo de la funcion pow de la librería Math (Math.pow(base, exp)))
let valoresBase = [1, 2, 3, 4, 5, 6];
/** 
 * Toma un arreglo de valores base y con ayuda del operador map(), utiliza el operador exponencial para
 * elevar el valor base por su indice así: (1**0, 2**1, 3**2, 4**3, 5**4, 6**5) 
*/
let exponenciales = valoresBase.map((base, i) => base ** i);
console.log("valores del arreglo base");
console.log(valoresBase);
console.log("Elevando su valor base por su indice en el arreglo");
console.log(exponenciales);


//Array.includes: Corrobora si algún elemento existe en el arreglo:
let nombres = ["Esteban", "Edoardo", "Camilo", "Juan"]
console.log("Array includes con arreglo");
console.log(nombres);

const nombreBuscar = "Esteban"
if (nombres.includes(nombreBuscar)) {
    // Logica que ustedes necesiten
    console.log(`${nombreBuscar} si existe dento del arreglo.`);
} else {
    console.log(`${nombreBuscar} No existe dento del arreglo.`);
}
