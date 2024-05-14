import CustomError from "../services/errors/CustomError.js";
import EErrors from "../services/errors/errors-enum.js";
import { generateUserErrorInfoESP, generateUserErrorInfoENG, generateUserErrorInfoFR } from "../services/errors/messages/user-creation-error.message.js";

const users = [];

export const getUsers = (req, res) => {
    try {
        res.send({ message: "Success!", payload: users });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo obtener los usuarios." });
    }

}

export const saveUser = (req, res) => {
    // try {

    // console.log(req.body);
    const { first_name, last_name, age, email } = req.body;
    // TODO - A implementar

    if (!first_name || !email) {
        // Create Custom Error
        CustomError.createError({
            name: "User Creation Error",
            cause: generateUserErrorInfoESP({ first_name, email }),
            message: "Error tratando de crear el usuario.",
            code: EErrors.INVALID_TYPES_ERROR
        })
    }

    // Si todo esta bien, armamos un DTO con la data ya controlada
    const userDto = {
        first_name,
        last_name,
        age,
        email
    }
    if (users.length === 0) {
        userDto.id = 1;
    } else {
        userDto.id = users[users.length - 1].id + 1;
    }
    users.push(userDto);
    res.status(201).send({ status: "success", payload: userDto });

    // } catch (error) {
    //     console.error(error.cause);
    //     res.status(500).send({ error: error.code, message: error.message });
    // }
}