//ES8
//Uso de Object.entries, Object.values, Object.keys 
//para un mejor control interno sobre las propiedades de un objeto.

const impuestos = {
    impuesto1: 1,
    impuesto2: 2,
    impuesto3: 3,
    impuesto4: 4
}
// console.log(impuestos.impuesto3);

let parLLaveValor = Object.entries(impuestos);
console.log(parLLaveValor);

let soloPropiedades = Object.keys(impuestos)
console.log(soloPropiedades);

let soloValores = Object.values(impuestos);
console.log(soloValores);



// Calcular el total de impuestos en valores
let impuestoTotal = soloValores.reduce((valorAcumulado, valorActual) => {
    console.log(`Valores: valorInicial: ${valorActual} y valorAcumulado: ${valorAcumulado}`);
    return valorAcumulado + valorActual;
})
console.log(impuestoTotal);