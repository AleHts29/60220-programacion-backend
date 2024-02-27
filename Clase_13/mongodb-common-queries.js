
// Slide 14
db.getCollection("mascotas").find({})

db.mascotas.insertMany([
    { nombre: "Tony", especie: "perro", edad: "4" },
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






// 2do

db.estudiantes.insertMany([
    { nombre: "Pedro", apellido: "Lopez", curso: "backend", correo: "micorreo@fgmail.com" },
    { nombre: "Laura", apellido: "Suarez", curso: "marketing", correo: "micorreo@fgmail.com" },
    { nombre: "German", apellido: "Caicedo", curso: "backend", correo: "micorreo@fgmail.com" },
    { nombre: "Pedro", apellido: "David", curso: "backend", correo: "micorreo@fgmail.com" },
    { nombre: "Pepino", apellido: "Spaghetti", curso: "react", correo: "micorreo@fgmail.com" }
]);



db.estudiantes.insertMany([
    { nombre: "Pedro", apellido: "Lopez" },
    { nombre: "Laura", apellido: "Suarez", curso: "marketing" }
]);

db.estudiantes.insertOne({ nombre: "Luisa", apellido: "Ramirez", genero: "F" });

db.estudiantes.insertMany([
    { nombre: "Hernan", apellido: "Diaz", curso: "backend", genero: "M", edad: 30 },
    { nombre: "Jessie", apellido: "Mercado", curso: "backend", genero: "F", edad: 25 },
]);

db.estudiantes.insertOne({ nombre: "Jean" });




// Slide 25
db.estudiantes.find({}, { nombre: 1, apellido: 1, curso: 1 }).sort({ nombre: 1 });

db.estudiantes.find({ $and: [{ curso: "backend" }, { apellido: "Lopez" }] });

db.estudiantes.find()
db.estudiantes.find().skip(3); //ofset

db.estudiantes.updateOne({ "nombre": "Laura" }, { $set: { edad: "28" } })

db.estudiantes.deleteOne({ nombre: "Luisa" })

db.estudiantes.find({ _id: ObjectId("63f7fe67229eaf90269da000") });

/////////////


