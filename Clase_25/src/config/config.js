import dotenv from 'dotenv';
import program from '../process.js';


// const environment = "development";
const environment = program.opts().mode;

// dotenv.config();


// console.log(process.env.SERVER_PORT);
// console.log(process.env.MONGO_URL);

dotenv.config({
    path: environment === "production" ? "./src/config/.env.production" : "./src/config/.env.development"
});


export default {
    port: process.env.SERVER_PORT,
    mongoUrl: process.env.MONGO_URL,
    adminName: process.env.ADMIN_NAME,
    adminPassword: process.env.ADMIN_PASSWORD
};