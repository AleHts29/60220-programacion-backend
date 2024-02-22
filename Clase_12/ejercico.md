```shell
// Conectar a la base de datos
use estudiantes

// Insertar varios estudiantes en la colección "estudiantes"
db.estudiantes.insertMany([
  {
    nombre: "Juan",
    apellido: "Perez",
    curso: "Matemáticas",
    correo: "juan.perez@example.com"
  },
  {
    nombre: "María",
    apellido: "González",
    curso: "Historia",
    correo: "maria.gonzalez@example.com"
  },
  {
    nombre: "Pedro",
    apellido: "Sánchez",
    curso: "Ciencias",
    correo: "pedro.sanchez@example.com"
  },
  {
    nombre: "Laura",
    apellido: "Martínez",
    curso: "Inglés",
    correo: "laura.martinez@example.com"
  },
  {
    nombre: "Ana",
    apellido: "López",
    curso: "Arte",
    correo: "ana.lopez@example.com"
  }
]);

// Listar todos los estudiantes en la colección
db.estudiantes.find().pretty();

```