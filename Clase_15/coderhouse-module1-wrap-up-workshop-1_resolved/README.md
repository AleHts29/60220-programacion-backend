# Practica Integradora - Curso Backend NodeJS Modulo 1

Realizar un proyecto en Node.js que se conecte tanto a una base de datos MongoDB llamada colegio, y una persistencia en filesystem, donde se tendrá un archivo json para estudiantes y otro para curos. 

Utilizar mongoose importándolo en Módulo (import) y gestionar sus acciones a través de promesas.

## Creacion de la BD y el Esquema:

Crear una colección llamada ‘estudiantes’ con la siguiente estructura y datos que se detallan a continuación:
- name: type string
- lastName: tipo string
- age: type number
- id: type string (campo único)
- courses: type array

Crear una colección llamada Cursos con la siguiente estructura:

- title: type string
- description: tipo string
- teacherName: type number
- students: type array

Todos los campos deben ser requeridos obligatoriamente ({ required: true })

## Creando nuestra capa de persistencia: Operando sobre los datos del colegio:

Crear la capa de persistencia de nuestra app, Esto implica:

- Crear un dao o service para manejar las operaciones de la BD MongoDB usando Mongoose para crear nuestro CRUD.
- Crear la posiblidad de usar un filesystem para persistir la misma data, es decir que existirá otro dao para manejo por filesystem.

## Generar el API REST para interactuar con la data: 
Crear los routers correspondientes para:

- Insertar un arreglo de estudiantes a dicha colección
- Desarrollar los endpoints correspondientes al CRUD pensado para trabajar con esta colección
- Corroborar los resultados con Postman.

## Desarrollar nuestra capa de vista: Usar Handlebars para crear las plantillas.

- Crear las vistas necesarias para poder visualizar la data del colegio y sus estudiantes, más los cursos asociados. 
- Deben exitir pagunas de ser posible para crear la data.
