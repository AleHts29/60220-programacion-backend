// Slide 14
db.createCollection("mascotas")
db.getCollection("mascotas").find({})

db.mascotas.insertMany([
    { nombre: "Kathy", especie: "gato", edad: "1" },
    { nombre: "Dory", especie: "pez", edad: "1" }
]);

db.mascotas.insertMany([
    { nombre: "Tony2", especie: "perro", edad: "4" },
    { nombre: "Salem", especie: "gato", edad: "1" },
    { nombre: "Kitty", especie: "gato", edad: "1" }
]);

db.mascotas.findOne({ especie: "gato" });
db.mascotas.countDocuments();





/**
*
* Slide 17
*
*/
// nombre
// apellido
// curso
// edad
// correo
// sexo 

db.estudiantes.insertMany([
    { nombre: "Pedro", apellido: "Lopez", curso: "backend", correo: "micorreo@fgmail.com", edad: 25, sexo: "M" },
    { nombre: "Laura", apellido: "Suarez", curso: "marketing", correo: "micorreo@fgmail.com", edad: 27, sexo: "F" },
    { nombre: "German", apellido: "Caicedo", curso: "backend", correo: "micorreo@fgmail.com", edad: 22, sexo: "M" },
    { nombre: "Pedro", apellido: "David", curso: "backend", correo: "micorreo@fgmail.com", edad: 25, sexo: "M" },
    { nombre: "Pepino", apellido: "Spaghetti", curso: "react", correo: "micorreo@fgmail.com", edad: 32, sexo: "M" }
])

// Falta campo de Sexo
db.estudiantes.insertMany([
    { nombre: "Carla", apellido: "Dutra", curso: "backend", correo: "micorreo@fgmail.com", edad: 25 },
    { nombre: "Elias", apellido: "Cafiero", curso: "react", correo: "micorreo@fgmail.com", edad: 37 }
])

// Usando Filtros
db.estudiantes.find({ sexo: { $exists: false } })
[
    {
        _id: ObjectId("64d11c26b66c9da9a5c74d60"),
        nombre: 'Carla',
        apellido: 'Dutra',
        curso: 'backend',
        correo: 'micorreo@fgmail.com',
        edad: 25
    },
    {
        _id: ObjectId("64d11c26b66c9da9a5c74d61"),
        nombre: 'Elias',
        apellido: 'Cafiero',
        curso: 'react',
        correo: 'micorreo@fgmail.com',
        edad: 37
    }
]

// #FILTROS
// $lt significa "Less Than"
// $gt significa "greater than"
db.estudiantes.find({ nombre: 'Juan' })
db.estudiantes.find({ nombre: 'Juan', edad: 29 })

db.estudiantes.find({ $or: [{ curso: 'backend' }, { curso: 'react' }] })

db.estudiantes.find({ edad: { $gt: 25 } })

db.estudiantes.find({ edad: { $lte: 25 } })

db.estudiantes.find({ edad: { $ne: 25 } })

db.estudiantes.find({ edad: { $gte: 26, $lte: 35 } })


// Búsqueda Avanzada
db.estudiantes.distinct('curso')
['backend', 'marketing', 'react']


db.productos.find({ "detalles.precio": 100 })
// buscará todos los documentos en la colección "productos" donde el campo "precio" dentro del campo anidado "detalles" sea igual a 100. Puedes ajustar los nombres de la colección y los campos anidados según tus necesidades.


/*=============================================
=                   post Breack               =
=============================================*/

// Proyecciones
db.estudiantes.find({}, { curso: 1, correo: 1 })

// Ordenamiento
db.clientes.find().sort({ edad: -1 })
db.estudiantes.find({}, { nombre: 1, apellido: 1, curso: 1 }).sort({ nombre: 1 });


// Skip --> es un ofset
db.estudiantes.find()
db.estudiantes.find().skip(3); //ofset


// Limit
db.estudiantes.find().limit(2)
db.estudiantes.find().sort({ edad: 1 }).limit(1)
db.estudiantes.find().sort({ edad: 1 }).skip(1).limit(1)



/**
*
* CRUD - Update/Delete
*
*/

// UPDATE
db.estudiantes.updateOne({ "nombre": "Laura" }, { $set: { edad: "28" } })
db.estudiantes.updateMany({ curso: { $eq: "backend" } }, { $set: { level: "avanzado" } })
db.estudiantes.find({ curso: "backend" })

// Update usando Options
// Definir el filtro para buscar el documento
const filtro = { nombre: "Juan" };

// Definir la actualización a realizar
const actualizacion = { $set: { edad: 30 } };

// Definir las opciones (usando upsert: true) - esta opcion permite de que si no existe el documento, lo crea.
const opciones = { upsert: true };

// Actualizar el documento con las opciones especificadas
db.usuarios.updateOne(filtro, actualizacion, opciones);





// Deleted
db.estudiantes.deleteOne({ nombre: "Luisa" })


// Busqueda por id
db.estudiantes.find({ _id: ObjectId("63f7fe67229eaf90269da000") });