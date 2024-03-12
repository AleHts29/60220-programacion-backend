import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2'

const studentCollection = "students";
const studentSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    grade: Number,
    group: String,
    courses: {
        type: Array,
        default: []
    }
})
// Cargamos el plugin de Paginate
studentSchema.plugin(mongoosePaginate)

const studentsModel = mongoose.model(studentCollection, studentSchema);
export default studentsModel;