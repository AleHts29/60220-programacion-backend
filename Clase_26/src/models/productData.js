const data = [
    {
        name: "Teclado Midi - Arturia Micro Freak",
        price: 250,
        id: 1,
    },
    {
        name: "Auriculares AKG240",
        price: 210,
        id: 2,
    },
    {
        name: "Monitores KRK",
        price: 457,
        id: 3,
    },
    {
        name: "Microfono Hyperx",
        price: 89,
        id: 4,
    },
    {
        name: "Placa de sonido Focus Ride Scarlett",
        price: 140,
        id: 5,
    },
    {
        name: "Korg Ms20 Mini Sintetizador Analógico",
        price: 590,
        id: 6,
    },
];


const recuperarDatos = () => {
    return data;
}


const guardarDato = (dato) => {
    data.push(dato)
    return data;
}


const deleById = () => {
    // logica
    // desarrollar logica de JS para: 
    // - Buscar por el id y luego eliminar el dato
}

module.exports = { recuperarDatos, guardarDato, deleById }
