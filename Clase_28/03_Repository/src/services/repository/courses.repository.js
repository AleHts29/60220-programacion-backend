export default class CoursesRepository {
    constructor(dao) {
        this.dao = dao;
    }
    getAll = () => {
        return this.dao.getAll();
    }
    save = (course) => {
        return this.dao.save(course);
    }
};