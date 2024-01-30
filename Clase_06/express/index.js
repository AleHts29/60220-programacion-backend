import express from 'express';

const app = express();
const PORT = 8080;

// "/saludo" --> esto es un endpoint o ruta o path de entrada desde el navegador
app.get('/saludo', (req, res) => {
    res.send("Hola desde server con express!!")
})


// Usando req.params
app.get('/user/:nombre/:apellido', (req, res) => {
    console.log(req.params);

    res.send(`Hola, tu nombre completo es: ${req.params.nombre} ${req.params.apellido} `)
})


app.get('/bienvenida', (req, res) => {
    res.send('<p style="color:blue"> Bienvenido a Express, estoy usando HTML como respuesta. </p>')
})

app.get('/usuario', (req, res) => {
    res.send(
        {
            nombre: 'Juan',
            apellido: "Torres",
            edad: 23,
            correo: 'juan@gmail.com'
        }
    )
})



// Caso práctico de uso de params

// Simulamos nuestra base de datos
const usuarios = [
    { id: 1, nomnbre: "Juan", apellido: "Torres", edad: "X", genero: "M" },
    { id: 2, nomnbre: "Carlos", apellido: "Garcia", edad: "20", genero: "M" },
    { id: 3, nomnbre: "Maria", apellido: "Torres", edad: "15", genero: "F" },
    { id: 4, nomnbre: "Patricia", apellido: "Ramirez", edad: "30", genero: "F" }
];


app.get('/userall', (req, res) => {
    res.send(usuarios)
})

app.get('/:userId', (req, res) => {
    let { userId } = req.params
    console.log(userId);
    // let userId_02 = req.params.userId

    const usuario = usuarios.find(u => u.id === parseInt(userId))
    if (usuario) {
        res.json({ usuario })
    }

    res.send({ msg: "Usuario no encontrado" })
})


/*=============================================
=         Usando req.query                 =
=============================================*/

const consultas = []
// http://localhost:8080/ejemploQueries/query?nombre=Eli&apellido=Cafiero&edad=38
app.get('/ejemploQueries/query', (request, response) => {
    let datos = request.query;
    console.log(datos);

    // let { nombre, apellido, edad } = request.query;
    // console.log(nombre, apellido, edad);

    consultas.push(datos)
    response.send(datos);
});

app.get('/ejemploQueries/query/all', (req, res) => {
    res.send(consultas)
})

app.get('/usuarios/query', (request, response) => {
    let { genero } = request.query;
    if (genero) {
        response.send(usuarios.filter(u => u.genero === genero));
    }
    response.send(usuarios);
});

app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})
