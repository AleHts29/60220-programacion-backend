import mongoose from 'mongoose';

const collectionName = 'courses';

const objConfig_01 = {
    type: String,
    unique: true,
    required: true
};

const objConfig_02 = {
    type: String,
    required: true
};


const courseSchema = new mongoose.Schema({
    title: objConfig_02,
    description: objConfig_02,
    teacherName: objConfig_02,
    students: {
        type: Array,
        default: []
    }
});

export const coursesModel = mongoose.model(collectionName, courseSchema);