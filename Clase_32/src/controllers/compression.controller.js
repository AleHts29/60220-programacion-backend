export const compressString = (req, res) => {
    let string = `Hola Coders, soy una String ridículamente larga`;
    for (let i = 0; i < 5e4; i++) {
        string += ` Hola Coders, soy una String ridículamente larga`; 
    }
    res.send(string);
};