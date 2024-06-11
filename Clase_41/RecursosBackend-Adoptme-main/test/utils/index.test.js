import chai from "chai";
import { createHash, passwordValidation } from "../../src/utils/index.js";

const expect = chai.expect;

describe('Test de la libreria de Encriptacion Utils.', ()=>{
    before(function(){
    });

    beforeEach(function(){
        this.timeout(5000);
    });

    it('La funcion de encriptacion debe generar un password encriptado', async function() {
        //Given
        const passwordPrueba = "123456"

        //Then 
        const result = await createHash(passwordPrueba);        
        console.log(`Resultado obtenido con createHash: ${result}`);

        //Assert that
        expect(result).not.to.be.NaN;
        expect(result).not.to.be.undefined;
        expect(result).not.to.be.null
        expect(result).not.to.be.empty;
        expect(result).not.equal(passwordPrueba);
    });
});
