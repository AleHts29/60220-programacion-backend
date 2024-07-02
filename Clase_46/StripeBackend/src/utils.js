import {fileURLToPath} from 'url';
import { dirname } from 'path';
import {faker} from '@faker-js/faker';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

faker.locale = 'es'; //Idioma de los datos

export const generateUser = () => {
    let numOfProducts = parseInt(faker.random.numeric(1, {bannedDigits:['0']}));
    let products = [];
    for (let i = 0; i < numOfProducts; i++) {
        products.push(generateProduct());
    }
    return {
        name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        sex: faker.name.sex(),
        birthDate: faker.date.birthdate(),
        products,
        image: faker.internet.avatar(),
        id: faker.database.mongodbObjectId(),
        email: faker.internet.email()
    };
};

export const generateProduct = () => {
    return {
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        stock: faker.random.numeric(1),
        id: faker.database.mongodbObjectId(),
        image: faker.image.image()
    }
};

export default __dirname;