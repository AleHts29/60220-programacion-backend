import mongoose from 'mongoose';

const collectionName = 'students';

const objConfig_01 = {
    type: String,
    unique: true,
    required: true
};

const objConfig_02 = {
    type: String,
    required: true
};


const studentSchema = new mongoose.Schema({
    name: objConfig_02,
    lastName: objConfig_02,
    email: objConfig_01,
    age: objConfig_02,
    password: objConfig_02,
    fullName: {
        type: String
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin'],
    },
    courses: {
        type: [
            {
                course: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "courses"
                }
            }
        ],
        default: []
    }

});

/**
 * Middleware para agregar dentro del método 'find' un llamado a una función, en este 
 * caso llamamos al metodo populate.
 */
studentSchema.pre('findOne', function () {
    this.populate("courses.course");
});
const studentsModel = mongoose.model(collectionName, studentSchema);
export default studentsModel;