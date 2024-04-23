export default class StudentsDto {
    constructor(student) {
        this.name = student.first_name;
        this.lastName = student.last_name;
        this.age = student.age;
        this.email = student.email;
        this.password = student.password;
        this.fullName = this.name + " " + this.lastName;
    }
};