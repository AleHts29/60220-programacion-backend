import BusinessService from "../services/dao/business.dao.js";

// getBusiness, getBusinessById, getBusinessesByCategory, saveBusiness


const businessService = new BusinessService()

//  No olvidar hacer validaciones antes de ejecutar los metodos de la clase service
export const getBusiness = async (req, res) => {
    try {
        // Nos tenemos que conectar contra un Service
        const businesses = await businessService.getAll();
        res.send({ message: "Success!", payload: businesses })
    } catch (error) {
        console.error("Hubo un problema conectandose a la persistencia de business.");
        res.status(500).send({ error: error });
    }
}

export const saveBusiness = async (req, res) => {
    try {
        // Nos tenemos que conectar contra un Service
        const result = await businessService.save(req.body);
        res.status(201).send({ message: "Success!", payload: result })
    } catch (error) {
        console.error("Hubo un problema conectandose a la persistencia de business.");
        res.status(500).send({ error: error });
    }
}

export const getBusinessesByCategory = async (req, res) => {
    try {
        const category = req.params.category
        // Nos tenemos que conectar contra un Service
        const result = await businessService.getBusinessesByCategory(category);
        res.status(200).send({ message: "Success!", payload: result })
    } catch (error) {
        console.error("Hubo un problema conectandose a la persistencia de business.");
        res.status(500).send({ error: error });
    }
}


export const getBusinessById = async (req, res) => {
    res.send({ message: "Success!", payload: "getBusinesById: Por implementar" });
}