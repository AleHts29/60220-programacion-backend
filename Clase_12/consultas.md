<!-- selecciona/crea una DB -->
>_ use coder32195

<!-- me muestra la base de datos en la que estoy -->
>_ db

<!-- ver colecciones -->
>_ show collections

<!-- crear collecciones -->
db."nombre de la coleccion".insertOne({name:"vino"})

coderhouse> db.products.insertOne({name:'vino'})
{
  acknowledged: true,
  insertedId: ObjectId("639a9fa994be134f70dfac4b")
}

<!-- muestra los datos de una coleccion especifica -->
coderhouse> db.products.find()
[
  { _id: ObjectId("639a9fa994be134f70dfac4b"), name: 'vino' },
  { _id: ObjectId("639aa03f94be134f70dfac4c"), name: 'cerveza' }
]



<!-- Modelo ACID son transacciones - Cuando usar una DB respecto de otra -->
Atomicity: Atomisidad
Consistency: Consistencia
Isolation: Aislamiento
Durability: Durabilidad


<!-- Ejercicio -->
<!-- _01 -->
use mibase32195

<!-- _03 -->
db.usuarios.insert([{nombre:"Juan", apellido:"Perez", edad: 23, email: "jp@gmail.com"}, {nombre:"Pedro", apellido:"Mei", edad: 21, email: "pm@gmail.com"}, {nombre:"Juan", apellido:"Suarez", edad: 25, email: "js@gmail.com"}])

<!-- _04 -->
show collection

<!-- _05 -->
db.usuarios.find()



