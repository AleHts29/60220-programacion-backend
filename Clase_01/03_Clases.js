class Auto {
    constructor(color, marca) {
        this.color = color
        this.marca = marca
    }


    // Metodos
    frenar() {
        return 'Se frena el auto'
    }

    acelerar() {
        return `Se acelera el auto de color: ${this.color}`
    }
}

// Creamos instancias de la clase Auto
let newAuto1 = new Auto("Negro", "Peugeot");
let newAuto2 = new Auto("Azul", "Ford");

console.log(newAuto1);
console.log(newAuto2);

console.log(newAuto1.acelerar());