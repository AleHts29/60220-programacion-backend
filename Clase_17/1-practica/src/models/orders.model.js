import mongoose from 'mongoose';

const collectionName = 'orders';

const currentSchema = new mongoose.Schema({
    name: String,
    size: {
        type: String,
        enum: ["small", "medium", "large"],
        default: "medium"
    },
    price: Number,
    quantity: Number,
    date: Date
});

const ordersModel = mongoose.model(collectionName, currentSchema);
export default ordersModel;