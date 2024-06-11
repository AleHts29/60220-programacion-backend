import mongoose from "mongoose";
import UsersDao from '../../src/dao/Users.dao.js'
import Assert from 'assert';

mongoose.connect(`mongodb://localhost:27017/clase40-adoptme-test?retryWrites=true&w=majority`);

const assert = Assert.strict;

describe('Testing Users Dao', () => {
    before(function () {
        this.usersDao = new UsersDao();
    });


    beforeEach(function () {
        this.timeout(5000); // time de espera ya que estamos usando una DB
        mongoose.connection.collections.users.drop();
    });

    it('El dao debe devolver los usuarios en formato de arreglo.', async function () {
        //Given
        console.log(this.usersDao);
        const isArray = true;
        //Then
        const result = await this.usersDao.get();
        console.log(`El resultado es un array? : ${Array.isArray(result)}`);
        //Assert that
        assert.strictEqual(Array.isArray(result), isArray);
    });

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
        assert.ok(result._id);
    });

    afterEach(function () {
        mongoose.connection.collections.users.drop();
    });
});