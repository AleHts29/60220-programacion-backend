export default class StudentsRepository {
    constructor(dao) {
        this.dao = dao;
    }
    getAll = () => {
        return this.dao.getAll();
    }
    save = (student) => {
        return this.dao.save(student);
    }
    update = (id, student) => {
        return this.dao.update(id, student);
    }
    findByUsername = async (username) => {
        return this.dao.findByUsername(username);
    };
};