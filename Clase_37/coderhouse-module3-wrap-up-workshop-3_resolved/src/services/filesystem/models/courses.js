export default class Course{
    constructor(title, description, teacherName){
        this.title = title;
        this.description = description;
        this.teacherName = teacherName;
        this.students = new Array();
    }
};