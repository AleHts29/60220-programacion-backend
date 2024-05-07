import express from 'express';
import config from './config/config.js';
//Clase de test:
import suma from './suma.js';
//import Routers
import usersRouter from './routers/users.router.js'

const app = express();

//JSON settings:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Declare routers:
app.use("/api/users", usersRouter);

const SERVER_PORT = config.port;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
    // TODO - Implementar

    let testPasados = 0;
    const testTotales = 4;

    // Test 01: La función debe devolver null si algún parámetro no es numérico.
    testPasados = escenario1(testPasados);


    // Test 02: La función debe devolver 0 si no se pasó ningún parámetro.
    testPasados = escenario2(testPasados);

    // Test 03: La función debe poder realizar la suma correctamente. 
    testPasados = escenario3(testPasados);


    // Test 04: La función debe poder hacer la suma con cualquier cantidad de números.
    testPasados = escenario4(testPasados);


    console.log(`Test a ejecutar: ${testTotales}, pasaron: ${testPasados}`);

});



const escenario1 = (testPasados) => {
    console.log("Test 1: La función debe devolver null si algun parametro no es numérico.");

    // Given
    const num1 = "2";
    const num2 = 3;


    // Then 
    let result = suma(num1, num2)


    // Assert 
    if (result === null) {
        console.log("Test 1: pasado\n");
        testPasados++
    } else console.log(`Test 1: No pasado, se recibió ${typeof result}, pero se esperaba null.`);

    return testPasados;
}


const escenario2 = (testPasados) => {
    console.log("Test 02: La función debe devolver 0 si no se pasó ningún parámetro.");

    // Given


    // Then 
    let result = suma()


    // Assert 
    if (result === 0) {
        console.log("Test 2: pasado\n");
        testPasados++
    } else console.log(`Test 2: No pasado, se recibió ${result}, pero se esperaba 0.`);

    return testPasados;
}


const escenario3 = (testPasados) => {
    console.log("Test 03: La función debe poder realizar la suma correctamente..");

    // Given
    const num1 = 2;
    const num2 = 3;
    let expected = num1 + num2


    // Then 
    let result = suma(num1, num2)


    // Assert 
    if (result === expected) {
        console.log("Test 3: pasado\n");
        testPasados++
    } else console.log(`Test 3: No pasado, se recibió ${result}, pero se esperaba ${expected}.`);

    return testPasados;
}


const escenario4 = (testPasados) => {
    console.log("Test 04: La función debe poder hacer la suma con cualquier cantidad de números.");

    // Given
    const numerosEntrada = [1, 2, 3, 4]
    let expected = 10


    // Then 
    let result = suma(...numerosEntrada)


    // Assert 
    if (result === expected) {
        console.log("Test 4: pasado\n");
        testPasados++
    } else console.log(`Test 4: No pasado, se recibió ${result}, pero se esperaba ${expected}.`);

    return testPasados;
}

