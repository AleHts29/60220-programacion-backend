const { recuperarDatos, guardarDato, deleById } = require('../models/productData.js')


// obtenerDatos
const obtenerDatos = async () => {
    // Logica 
    return await recuperarDatos();
}


// crearDato
const crearDato = async (dato) => {
    // Logica
    // Validar si el producto ya existe
    dato.id = Math.random();
    await guardarDato(dato)
    return dato;
}

// deleteServices
const deleteServices = async (id) => {
    // logica
    return await deleById(id);
}


module.exports = { obtenerDatos, crearDato, deleteServices }