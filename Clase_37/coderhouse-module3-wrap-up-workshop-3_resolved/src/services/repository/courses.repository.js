export default class CoursesRepository {
    constructor(dao) {
        this.dao = dao;
    }
    getAll = () =>{
        return this.dao.getAll();
    }
    getById = (id) => {
        return this.dao.getBy(id);
    }
    saveCourse = (course) =>{
        return this.dao.save(course);
    }
    updateCourse = (id,course) =>{
        return this.dao.updatecourse(id,course);
    }
};