import usersModel from "../models/users.model.js";

export default class UserServiceDao {

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

    findByUsername = async (username) => {
        const result = await usersModel.findOne({email: username});
        return result;
    };

    update = async (filter, value) => {
        console.log("Update user with filter and value:");
        console.log(filter);
        console.log(value);
        let result = await usersModel.updateOne(filter, value);
        return result;
    }
};