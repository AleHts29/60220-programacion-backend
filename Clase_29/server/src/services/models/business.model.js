import mongose from 'mongoose';

const schema = new mongose.Schema({
    name: {
        type: String,
        unique: true
    },
    category: String,
    products: []
})


const businessModel = mongose.model('businesses', schema)
export default businessModel;