const moment = require('moment')


// Crear un objeto Moment
let fechaActual = moment();

// Obtener la fecha y hora actual
let fechaYHoraActual = moment().format('YYYY-MM-DD HH:mm:ss');

// Obtener el día de la semana actual
let diaSemanaActual = moment().format('dddd');

// Obtener el mes actual
let mesActual = moment().format('MMMM');

// Sumar días a una fecha
let fechaFutura = moment().add(7, 'days').format('YYYY-MM-DD');

// Restar días a una fecha
let fechaPasada = moment().subtract(7, 'days').format('YYYY-MM-DD');

// Calcular la diferencia en días entre dos fechas
let fecha1 = moment('2023-01-01');
let fecha2 = moment('2023-01-10');
let diferenciaEnDias = fecha2.diff(fecha1, 'days');

// Mostrar resultados
console.log('Fecha actual:', fechaActual);
console.log('Fecha y hora actual:', fechaYHoraActual);
console.log('Día de la semana actual:', diaSemanaActual);
console.log('Mes actual:', mesActual);
console.log('Fecha futura:', fechaFutura);
console.log('Fecha pasada:', fechaPasada);
console.log('Diferencia en días:', diferenciaEnDias);