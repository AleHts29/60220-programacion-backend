import studentsModel from "../models/students.js"

export default class StudentServiceDao {
    constructor() {
        console.log("Working students with Database persistence in mongodb");
    }

    getAll = async () => {
        let students = await studentsModel.find();
        return students.map(student => student.toObject());
    }
    save = async (student) => {
        let result = await studentsModel.create(student);
        return result;
    }

    getBy = async (params) => {
        let result = await studentsModel.findOne(params).populate('courses').lean();
        return result;
    };

    findByUsername = async (username) => {
        const result = await studentsModel.findOne({ email: username });
        return result;
    };

    update = async (filter, value) => {
        console.log("Update student with filter and value:");
        console.log(filter);
        console.log(value);
        let result = await studentsModel.updateOne(filter, value);
        return result;
    };

    updateStudent = async (id, user) => {
        delete user._id;
        let result = await studentsModel.updateOne({ _id: id }, { $set: user })
        return result;
    }

    // Extra
    randomStudent = async () => {
        studentsModel.count().exec(function (err, resultCount) {
            var rand = Math.floor(Math.random() * resultCount);
            studentsModel.findOne().skip(rand).exec(function (err, result) {
                console.log(result);
            });
        });
    }
}

