import businessModel from "../models/business.model.js";

export default class BusinessService {

    getAll = async () => {
        let businesses = await businessModel.find();
        return businesses.map(business=>business.toObject());
    }
    save = async (business) => {
        const actualBusiness = await businessModel.find({name: business.name});
        if (actualBusiness) {
            throw new Error("El negocio ya existe");
        }
        let result = await businessModel.create(business);
        return result;
    }

    getById = async (id) => {
        const result = await businessModel.findOne({_id: id});
        return result;
    }

    getBusinessesByCategory = async (category) => {
        const result = await businessModel.find({category: category});
        return result;
    }
};