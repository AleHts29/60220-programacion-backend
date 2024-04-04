import petsModel from './models/pet.model.js';

export default class PetsService {
    constructor(){
        console.log("Calling pets model using a service.");
    };  
    getAll = async () => {
        let pets = await petsModel.find();
        return pets.map(pet=>pet.toObject());
    };
    save = async (pet) => {
        let result = await petsModel.create(pet);
        return result;
    };
    findByName = async (name) => {
        const result = await petsModel.findOne({name: name});
        return result;
    };
    update = async (filter, value) => {
        console.log("Update pet with filter and value:");
        console.log(filter);
        console.log(value);
        let result = await petsModel.updateOne(filter, value);
        return result;
    }
};