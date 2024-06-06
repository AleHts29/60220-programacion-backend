import mongoose from 'mongoose';
import UserDao from '../../src/dao/Users.dao.js';
import chai from 'chai'

mongoose.connect(`mongodb://localhost:27017/clase40-adoptme-test?retryWrites=true&w=majority`)

const expect = chai.expect;


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
        const emptyArray = []

        // Then
        const result = await this.usersDao.get()

        // Asserts
        expect(result).to.be.deep.equal(emptyArray)
        expect(Array.isArray(result)).to.be.ok
        expect(Array.isArray(result)).to.be.equal(true)
        expect(result.length).to.be.deep.equal(emptyArray.length);
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
        expect(result._id).to.be.ok
    })

    // it - test03

    // after
    // afterEach
    afterEach(function () {
        mongoose.connection.collections.users.drop();
    })

})