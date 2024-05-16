import {faker} from '@faker-js/faker'; 

export const fakeUser = (req, res) => {
    let first_name = faker.name.firstName();
    let last_name = faker.name.lastName();
    let email = faker.internet.email();
    let age = faker.random.numeric(2);
    let password = faker.internet.password();
    res.send({first_name, last_name, email, age, password});
};