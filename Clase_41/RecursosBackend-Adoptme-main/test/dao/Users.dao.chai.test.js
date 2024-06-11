import mongoose from "mongoose";
import UsersDao from '../../src/dao/Users.dao.js'
import chai from "chai";

mongoose.connect(`mongodb://localhost:27017/clase39-adoptme-test?retryWrites=true&w=majority`);

const expect = chai.expect;

// generamos un escenario
describe('Testing Users Dao', () => {
    before(function () {
        this.usersDao = new UsersDao();
    });

    beforeEach(function () {
        this.timeout(5000);
        mongoose.connection.collections.users.drop();
    });

    // test puntual del escenario
    it('El dao debe devolver los usuarios en formato de arreglo.', async function () {
        //Cada Test tiene su entorno aislado. Luego nada aquí afectará otros Tests.
        //Given
        let emptyArray = [];
        //Then
        const result = await this.usersDao.get();
        console.log("Resultado obtenido con el Dao: get()");

        //Assert that
        console.log(result);
        expect(result).to.be.deep.equal(emptyArray);
        expect(Array.isArray(result)).to.be.ok;
        expect(Array.isArray(result)).to.be.equal(true);
        expect(result.length).to.be.deep.equal(emptyArray.length);
    });

    // test puntual del escenario
    it('El Dao debe agregar el usuario correctamente a la BD.', async function () {
        //Given 
        let mockUser = {
            first_name: "Usuario de prueba 1",
            last_name: "Apellido de prueba 1",
            email: "correodeprueba1@gmail.com",
            password: "123456"
        };

        //Then
        const result = await this.usersDao.save(mockUser);
        //Assert that
        expect(result._id).to.be.ok;
    });

    afterEach(function () {
        mongoose.connection.collections.users.drop();
    });
});