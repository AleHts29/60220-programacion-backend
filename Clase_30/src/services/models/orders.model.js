import moongose from 'mongoose';

const schema = new moongose.Schema({
    number:Number,
    business: [
        {
            type: moongose.SchemaTypes.ObjectId,
            ref: 'business'
        }
    ],
    user: [
        {
            type: moongose.SchemaTypes.ObjectId,
            ref: 'users'
        }
    ],
    products: [],
    totalPrice: Number
});

const ordersModel = moongose.model('orders', schema);
export default ordersModel;