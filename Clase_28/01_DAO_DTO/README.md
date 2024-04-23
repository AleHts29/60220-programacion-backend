# Practica Integradora 2 - Curso Backend NodeJS Modulo 2

Realizar un proyecto en Node.js que se conecte tanto a una base de datos MongoDB llamada colegio, donde se tendrá un registro y login con sesión de usuarios. 

Utilizar passport para manejo de politicas y session storage o JWT (Cookies) para el manejo de la sesion de los usuarios.

## Creacion de la BD y el Esquema:

Reutilizar la collección llamada ‘estudiantes’ que ya tenía la siguiente estructura, solo agregar dos nuevos campos email como llave o username y el password para el estudiante.
- name: type string
- lastName: tipo string
- email: tipo string y unico
- password: tipo string y hasheado (no debe ser visible en BD).
- age: type number
- id: type string (campo único)
- courses: type array

La colección llamada Cursos permanece con la estructura:

- title: type string
- description: tipo string
- teacherName: type number
- students: type array

Todos los campos deben ser requeridos obligatoriamente ({ required: true })

## Creando nuestra capa de persistencia: Operando sobre los datos del colegio:

Actualizar la capa de persistencia de nuestra app, para poder manejar las busquedas de username (email) y para los flujos de autenticación:

- Usar la clase StudentsService ya creada previamente, el método se puede llamar: findByUsername

## Crear un router nuevo (Custom de ser posible) para manejo de autenticación de los estudiantes a modo de API: 
Crear los routers correspondientes para:

- Manejo de login del usuario.
- Registro de un nuevo usuario con password Hasheado.
- Poder validar si el usuario ya existe.
- Poder generar politicas de acceso a los usuarios (Usar Passport como prioridad)

## Manejo de Tokens de sesion o session Storage

- Dentro de la capa de cliente decidir el manejo de cómo se va a manejar la sesion del usuario: puede ser por token JWT en cookie o Headers, en caso contrario usando session storage para el ejercicio.
- Deben exitir las paginas correspondientes a las vistas de autenticacion y registro así como una pagina de detalle con la info del usuario que no será Publica.
- Las paginas publicas seran: Login y Registro.
- Las paginas privadas serían: detalle o info del usuario, o cualquier otra pagina que obtenga info de la BD. (como cursos y estudiantes)
