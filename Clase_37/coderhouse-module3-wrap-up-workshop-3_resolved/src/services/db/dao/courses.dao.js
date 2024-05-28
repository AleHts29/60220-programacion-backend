import {coursesModel} from "../models/courses.js";

export default class CoursesDao {
    constructor() { 
        console.log("Working courses with Database persistence in mongodb");
    }

    getAll = async () =>{
        let courses = await coursesModel.find().lean().populate('students');
        return courses;
    }
    getById = async(id) =>{
        let course = await coursesModel.findOne({_id:id}).populate('students');
        return course;
    }
    saveCourse =async course =>{
        let result = await coursesModel.create(course);
        return result;
    }
    updateCourse = async (id,course) =>{
        delete course._id; 
        let result = await coursesModel.updateOne({_id:id},{$set:course})
        return result;
    }
}
