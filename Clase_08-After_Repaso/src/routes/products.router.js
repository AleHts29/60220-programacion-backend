import {Router} from "express";

const router = Router();

let productos = [
    {id: 1, name: "Zapatos"},
    {id: 2, name: "Deportes"},
    {id: 3, name: "Electronicos"}
];


// armar los endpoints
router.get("/", (req, res) => {
    console.log("Listado de productos: ");
    console.log(productos);
    res.send(productos);
});

router.get("/:id", (req, res) => {
    console.log(req.params); //URL /
    console.log(req.query); //URL/queryParams ?variable=valor&variable2=valor
    const productId = parseInt(req.params.id);
    if(productId){
        let productIndex  = productos.findIndex((p) => p.id === productId);
        res.send(productIndex === -1 ? "Producto no encontrado" : productos[productIndex]);
    }else {
       res.status(400).send({error: "400", menssage: "El id es invalido o no existe."});
    }
    res.send(productos);
});




export default router;