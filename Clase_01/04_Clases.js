class Contador {
    constructor(nombre) {
        this.nombre = nombre;
        this.valor = 0;


        if (typeof Contador.contadorGlobal === 'undefined') {
            Contador.contadorGlobal = 0
        }

        Contador.contadorGlobal++;
    }


    // Metodos
    incrementar() {
        this.valor++;
    }

    decrementar() {
        this.valor--;
    }

    obtenerValor() {
        return this.valor;
    }

    static obtenerValorContadorGlobal() {
        return Contador.contadorGlobal;
    }
}


// Ejemplo de uso
const contador_01 = new Contador('Juan');
const contador_02 = new Contador('Arion');

contador_01.incrementar();
contador_01.incrementar();
contador_02.decrementar();

console.log(`${contador_01.nombre}: ${contador_01.obtenerValor()}`);


console.log(`Contador Global: ${Contador.obtenerValorContadorGlobal()}`);
