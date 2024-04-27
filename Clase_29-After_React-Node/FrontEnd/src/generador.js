import faker from 'faker'

faker.locale = "es";

const generarNoticia = () => ({
    titulo: faker.hacker.phrase(),
    cuerpo: faker.lorem.paragraph(),
    autor: faker.name.findName(),
    imagen: faker.image.abstract(),
    email: faker.internet.email(),
    vista: false
})
 
export default generarNoticia