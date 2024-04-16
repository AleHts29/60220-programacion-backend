const express = require('express');

// Se va a comunica contra un Controller
const { getDatosControllers, postDatosControllers, deleteDatosControllers } = require('../controllers/products.Controller.js')


const router = express.Router();

// GET
router.get('/', getDatosControllers)


// POST
router.post('/', postDatosControllers)


// DELETE
router.delete('/:id', deleteDatosControllers)



module.exports = router;