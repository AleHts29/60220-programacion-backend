import chai from 'chai';
import supertest from 'supertest';

const expect = chai.expect;
const requester = supertest('http://localhost:8080')


describe("Test Pets App", () => {
    // Before
    // BeforeEach

    /*=============================================
    =                   Section 01                =
    =============================================*/
    describe("Testing Pets Api", () => {
        // Before
        // BeforeEach

        // Test 01
        it("Crear Mascota: El API POST /api/pets debe crear una nueva mascota correctamente", async () => {
            // Given
            const petMock = {
                name: "Patitas",
                specie: "Pez",
                birthDate: "10-10-2022"
            }

            // Then
            const { _body, statusCode } = await requester.post("/api/pets/").send(petMock)
            // console.log(result);

            // Assert
            expect(statusCode).is.eql(201)
            expect(_body.payload).to.ok.and.to.have.property('_id')
            expect(_body.payload).to.have.property('adopted').and.to.be.deep.equal(false)
        })


        // Test 02
        it("Crear Mascota sin nombre: El API POST /api/pets debe retornar un estado HTTP 400 con error.", async () => {
            // Given
            const petMock = {
                specie: "Pez",
                birthDate: "10-10-2022"
            }

            // Then
            const { _body, statusCode } = await requester.post("/api/pets/").send(petMock)
            // console.log(result);


            // Assert
            expect(statusCode).is.eql(400)
            expect(_body).is.ok.and.to.have.property('error')
        })


        it("Crear mascota con Avatar (Test con uploads): Debe poder crearse una mascota con la ruta de la imagen.", async () => {
            // Given
            const petMock = {
                name: "Orejitas",
                specie: "cat",
                birthDate: "10-11-2022"
            };

            // Then
            const result = await requester.post("/api/pets/withimage")
                .field('name', petMock.name)
                .field('specie', petMock.specie)
                .field('birthDate', petMock.birthDate)
                .attach('image', './test/files/coderDog.jpg')


            // Assert
            expect(result.statusCode).to.eql(200);
            // console.log(result._body);
            expect(result._body.payload.image).to.be.ok;
        })



    })



    /*=============================================
    =                   Section 02                =
    =============================================*/
    describe("Testing login and session with Cookies", () => {

        before(function () {
            this.cookie;
            this.mockUser = {
                first_name: "Usuario de prueba 2",
                last_name: "Apellido de prueba 2",
                email: "correodeprueba2@gmail.com",
                password: "123456"
            }
        })




        // Test_01
        it("Test Registro Usuario: Debe poder registrar correctamente un usuario", async function () {
            // Given

            // Then
            const { statusCode } = await requester.post('/api/sessions/register').send(this.mockUser)

            // Assert
            expect(statusCode).is.eql(200);
        })

        // Test_02
        it("Test Login Usuario: Debe poder hacer login correctamente con el usuario registrado previamente.", async function () {
            // Given
            const mockLogin = {
                email: this.mockUser.email,
                password: this.mockUser.password
            }

            // Then
            const result = await requester.post('/api/sessions/login').send(mockLogin)
            // console.log(result);
            const cookieResult = result.headers['set-cookie'][0]

            const cookieData = cookieResult.split("=")
            this.cookie = {
                name: cookieData[0],
                value: cookieData[1]
            }


            // Assert
            expect(result.statusCode).is.eqls(200)
            expect(this.cookie.name).to.be.ok.and.eql('coderCookie')
            expect(this.cookie.value).to.be.ok
        })

        // // Test_03
        it("Test Ruta Protegida: Debe enviar la cookie que contiene el usuario y destructurarla correctamente.", async function () {
            // Given


            // Then
            const { _body } = await requester.get("/api/sessions/current").set('Cookie', [`${this.cookie.name}=${this.cookie.value}`])

            // Assert
            expect(_body.payload.email).to.be.ok.and.eql(this.mockUser.email)
        })


    })

})