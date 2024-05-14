// TODO - A implementar
export const generateUserErrorInfoESP = (user) => {
    return `Una o más propiedades fueron enviadas incompletas o no son válidas.
    Lista de propiedades requeridas:
        -> fist_name: type String, recibido: ${user.first_name}
        -> email: type String, recibido: ${user.email}
`;
}



export const generateUserErrorInfoENG = (user) => {
    return `One or more properties were sent incomplete or are not valid.
    List of required properties:
        -> first_name: type String, received: ${user.first_name}
        -> email: type String, received: ${user.email}
`;
}


export const generateUserErrorInfoFR = (user) => {
    return `Une ou plusieurs propriétés ont été envoyées incomplètes ou ne sont pas valides.
    Liste des propriétés requises:
        -> first_name: type String, reçu: ${user.first_name}
        -> email: type String, reçu: ${user.email}
`;
}
