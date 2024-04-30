import ordersModel from "../models/orders.model.js";

export default class OrderService {

    getAll = async () => {
        let orders = await ordersModel.find();
        return orders.map(order=>order.toObject());
    }
    save = async (order) => {
        let result = await ordersModel.create(order);
        return result;
    }

    getById = async (id) => {
        const result = await ordersModel.findOne({_id: id});
        return result;
    }
};