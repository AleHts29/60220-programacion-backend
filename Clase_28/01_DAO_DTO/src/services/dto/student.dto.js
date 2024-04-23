export default class StudentsDTO {
    constructor(student) {
        this.name = student.first_name;
        this.lastName = student.last_name;
        this.age = student.age;
        this.email = student.email_address;
        this.password = student.password;
        this.fullName = `${this.name} - ${this.lastName}`
    }
}