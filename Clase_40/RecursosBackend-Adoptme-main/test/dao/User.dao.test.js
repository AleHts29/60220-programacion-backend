import mongoose from 'mongoose';
import UserDao from '../../src/dao/Users.dao.js';
import Assert from 'assert';

mongoose.connect(`mongodb://localhost:27017/clase40-adoptme-test?retryWrites=true&w=majority`)

const assert = Assert.strict;


describe('Testing User Dao', () => {

    // before
    before(function () {
        this.usersDao = new UserDao()
    })
    // beforeEach
    beforeEach(function () {
        this.timeout(5000) // Tiempo de espera ya que estamos trabajando con una DB
        mongoose.connection.collections.users.drop();
    })

    // it - test01
    it('El dao debe devolver los usuarios en formato de arreglo.', async function () {
        // Given
        const isArray = true

        // Then
        const result = await this.usersDao.get()
        // console.log(`result es un array? - ${Array.isArray(result)} `);


        // Asserts
        assert.strictEqual(Array.isArray(result), isArray)

    })

    // it - test02
    it('El Dao debe agregar el usuario correctamente a la DB', async function () {
        // Given
        const mockUser = {
            first_name: "NombreUser test 01",
            last_name: "ApellidoUser test 01",
            email: "test11@gmail.com",
            password: "123qwe",
        }

        // Then
        const result = await this.usersDao.save(mockUser)
        // console.log(`result - ${result} `);


        // Asserts
        assert.ok(result._id);
    })

    // it - test03

    // after
    // afterEach
    afterEach(function () {
        mongoose.connection.collections.users.drop();
    })

})