import {coursesModel} from "./models/courses.js";

export default class StudentService {
    constructor() { 
        console.log("Working courses with Database persistence in mongodb");
    }

    getAll = async () => {
        let courses = await coursesModel.find();
        return courses.map(course=>course.toObject());
    }
    save = async (course) => {
        let result = await coursesModel.create(course);
        return result;
    }
}
