import usersModel from "../models/users.model.js";

export default class UserService {

    getAll = async () => {
        let users = await usersModel.find();
        return users.map(user=>user.toObject());
    }
    save = async (user) => {
        let result = await usersModel.create(user);
        return result;
    }

    getById = async (id) => {
        const result = await usersModel.findOne({_id: id});
        return result;
    }
};