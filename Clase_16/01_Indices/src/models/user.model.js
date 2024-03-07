import mongoose from 'mongoose';

const userCollection = 'users';

const stringTypeSchemaUniqueRequired = {
    type: String,
    unique: true,
    required: true
};

const stringTypeSchemaNonUniqueRequired = {
    type: String,
    required: true
};



const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        index: true
    },
    // first_name: stringTypeSchemaNonUniqueRequired,
    last_name: stringTypeSchemaNonUniqueRequired,
    email: stringTypeSchemaNonUniqueRequired,
    gender: stringTypeSchemaNonUniqueRequired
});

export const userModel = mongoose.model(userCollection, userSchema);
