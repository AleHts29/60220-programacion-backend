const { obtenerDatos, crearDato, deleteServices } = require("../services/product.Services.js")


// getDatosControllers, postDatosControllers, deleteDatosControllers

const getDatosControllers = async (req, res) => {
    // Una logica para ir a buscar la info
    let datos = await obtenerDatos();
    res.json(datos)
}


const postDatosControllers = async (req, res) => {
    // Una logica para ir a guardar la info
    let dato = req.body
    let datos = await crearDato(dato);
    res.json(datos)
}

const deleteDatosControllers = async (req, res) => {
    // Una logica para ir a borrar la info
    let { id } = req.params
    await deleteServices(id)
    res.json({ msj: 'Delete product' })
}

module.exports = {
    getDatosControllers,
    postDatosControllers,
    deleteDatosControllers
}