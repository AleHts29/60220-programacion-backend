import moongose from 'mongoose';

const schema = new moongose.Schema({
    name:String,
    role:String,
    email:{
        type: String,
        unique: true
    },
    orders: [
        {
            type: moongose.SchemaTypes.ObjectId,
            ref: 'orders'
        }
    ]
});

const usersModel = moongose.model('users', schema);
export default usersModel;