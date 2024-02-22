- load(script.js) -> Carga un script de comandos mongo.

// Ver bases de datos
show dbs

## Usar y crar base de datos

use nombrebasededatos

## Eliminar bases de datos

db.dropDatabase()

## Crear Coleccion

db.createCollection("nombre coleccion")
show collections
db.nombreColeccion.stats() -> Mostrar informacion general de la coleccion
db.nombreColeccion.storageSize() -> Mostrar tamañode la coleccion
db.nombreColeccion.totalIndexSize() -> tamaño total de todos los índices de la colección.
db.nombreColeccion.renameCollection

//CREAR Y LEER

## CREAR

db.users.insertOne({name:"Camilo"}) -> Crear un documento.
db.users.insert({}) -> Crear un documento
db.users.insertMany([{},{}]) -> Crear mas de un documento.
db.users.insert({date:ISODate()}) -> Crear documento con propiedad tipo fecha.

## LEER

db.users.findOne() -> Devuelve el primer Documento.
db.users.find() -> Devuelve todos los documentos.
db.users.find().pretty() -> Devuelve todos los documentos en un formato mas legible.
db.users.find({name:"Camilo", age:32}) -> Devuelve los docmentos que conicidad con el objeto.

## CONTADORES

db.users.count() -> Devuelve el numero de documentos que hay dentro de la colleccion.
db.users.count({name:"Jorge"}) -> Devuelve el numero de documentos que hay dentro de la colleccion, que coincida con el filtro.

## FILTROS

db.users.find({year:1999, name:"Angel"}) -> Devuelve los docmentos que conicidad con el objeto.
db.users.find({$and:[{year:1999}, {name:"Angel"}]}) => Filtra con operador condicional AND
db.users.find({$or:[{year:1999}, {name:"Angel"}]}) => Filtra con operador condicional OR
db.users.find({"year": {$lt:1960}}) -> Devuelve los valores menores al valor especificado.
db.users.find({"year": {$lte:1998}}) -> Devuelve los valores menores o iguales al valor especificado
db.users.find({"year": {$ne:1998}}) -> Devuelve los valores que no sean iguales a el valor especificado.
db.users.find({"year": {$gt:1970}}) -> Devuelve los valores mayores al valor especificado.
db.users.find({"year": {$gte:1975}}) -> Devuelve los valores mayores o iguales al valor especificado.
db.users.find().limit(5) -> Devuelve los primeros 5 docuemntos.

## PROYECCIONES

db.users.find({}, {"name":1, "year":1}) -> Muestra unicamente los campos especificados en el filtro.

## sort limit skip

db.users.find().limit(5) -> Devuelve los primeros 5 documentos.
db.users.find().sort({name:-1}) -> Devuelve la informacion invertida segun el filtro especificado.
db.users.find().skip(3) -> Se salta 3 Documentos y devuelve el resto.

## UPDATE

db.users.update({"\_id" : ObjectId("617ac9d8cb2c918e0ef1fe5d")},{name:"Guille","year":1963}) -> Actualiza todo el documento segun el id especificado por el obj que se pasa como argumento.
db.users.update({"name":"Jorge"}, {$set:{"name":"Camilo Lindarte"}})
 -> Actualiza el campo que se setea en el parametro 2.
db.users.updateOne({"_id" : ObjectId("617ac9d8cb2c918e0ef1fe5d")}, {$set:{"year":2030}}) -> Actualiza un campo del documento segun el filtro.

db.user.updateMany({"name":"Camilo Lindarte"}, {$set:{"namer":"coderNew"}}) -> Actualiza todos los campos documentos que macheen con la condicion del filtro,

db.users.update({"\_id" : ObjectId("617ac9d8cb2c918e0ef1fe5d")}, {$currentDate:{"lastModified":true}}) -> Actualiza la fecha de la ultima modificacion

db.users.update({"\_id" : ObjectId("617ac9d8cb2c918e0ef1fe5d")}, {$rename:{"year":"new_yeaar"}}) -> Actualiza el nombre del campo especificado.

## DELETE

db.users.deleteMany({"name":"Camilo Lindarte"}) -> Elimina todos los documentos que macheen con el filtro.
db.users.deleteOne({"name":"Rahul"}) -> Elimina solo un documento que machee con el filtro.

db.users.deleteMany({}) -> Elimina toda los documentos sin borrar la coleccion.

## USUARIOS

db.createUser({user:"lector", pwd:"123456", roles:[{role:"read", db:"coderTwo"}]}) -> Creamos un usuario que solo tenga permisos para leer coleccion y documentos dentro de la base de datos coderTwo

db.createUser(
{
user: "lector_2",
pwd: "123456",
roles:[{role: "read" , db:"coderData"}]
})
