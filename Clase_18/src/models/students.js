import mongoose from 'mongoose';

const studentCollection = "students";
const studentSchema = mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    gender:String,
    grade:Number,
    group:String,
    courses:{
        type:Array,
        default:[]
    }
})

const studentsModel = mongoose.model(studentCollection,studentSchema);
export default studentsModel;