import OrderService from '../services/dao/orders.dao.js';

const orderService = new OrderService();

// getOrders, getOrderById, saveOrder

export const getOrders = async (req, res) => {
    try {
        // Nos tenemos que conectar contra un Service
        const businesses = await orderService.getAll();
        res.send({ message: "Success!", payload: businesses })
    } catch (error) {
        console.error("Hubo un problema conectandose a la persistencia de Orders.");
        res.status(500).send({ error: error });
    }
}


export const getOrderById = async (req, res) => {
    try {
        const { id } = req.params
        // Nos tenemos que conectar contra un Service
        const order = await orderService.getById(id);
        if (!order) {
            return res.status(404).json({ message: "Orden no encontrada" });
        }
        res.status(200).send({ message: "Success!", payload: order })
    } catch (error) {
        console.error("Hubo un problema conectandose a la persistencia de Orders.");
        res.status(500).send({ error: error });
    }
}


export const saveOrder = async (req, res) => {
    try {
        const orderData = req.body;
        // Nos tenemos que conectar contra un Service
        const businesses = await orderService.save(orderData);
        res.status(201).send({ message: "Success!", payload: businesses })
    } catch (error) {
        console.error("Hubo un problema conectandose a la persistencia de Orders.");
        res.status(500).send({ error: error });
    }
}

