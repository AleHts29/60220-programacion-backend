import chai from 'chai';
import { createHash } from '../../src/utils/index.js'

const expect = chai.expect


describe('Test de la libreria de encriptacion de Utils', () => {
    // before




    it('La funcion de encriptacion debe generar un password encriptado', async function () {
        // Given 
        const passwordsMock = "123qwe"

        // Then
        const result = await createHash(passwordsMock)
        // console.log(result);


        // Asserts
        expect(result).not.to.be.NaN
        expect(result).not.to.be.undefined
        expect(result).not.to.be.null
        expect(result).not.to.be.empty
        expect(result).not.equal(passwordsMock)

    })
})