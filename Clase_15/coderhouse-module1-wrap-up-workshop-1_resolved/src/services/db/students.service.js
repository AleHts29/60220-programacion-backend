import studentsModel from "./models/students.js";

export default class StudentService {
    constructor() { 
        console.log("Working students with Database persistence in mongodb");
    }

    getAll = async () => {
        let students = await studentsModel.find();
        return students.map(student=>student.toObject());
    }
    save = async (student) => {
        let result = await studentsModel.create(student);
        return result;
    }
}

