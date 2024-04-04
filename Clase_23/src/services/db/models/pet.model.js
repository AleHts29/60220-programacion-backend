import mongoose from 'mongoose';

const collection = 'pets';

const schema = new mongoose.Schema({
    name: String,
    type: String,
    isAdopted: Boolean
});

const petsModel = mongoose.model(collection,schema);

export default petsModel;