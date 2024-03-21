## bcrypt

bcrypt, como un algoritmo de hash adaptativo, no determina directamente si una contraseña es válida o no. En cambio, se utiliza en un proceso de verificación de contraseñas de la siguiente manera:

1. Registro de la contraseña: Cuando un usuario crea una cuenta o establece una contraseña, la contraseña se pasa a la función bcrypt junto con una "sal" generada aleatoriamente. El resultado de esta operación es el hash bcrypt de la contraseña original junto con la sal. Este hash bcrypt y la sal se almacenan en la base de datos asociados al usuario.

2. Verificación de la contraseña: Cuando el usuario intenta iniciar sesión, ingresa su contraseña. La aplicación recupera el hash bcrypt y la sal almacenados en la base de datos correspondientes al usuario.

3. Verificación de la contraseña ingresada: La aplicación toma la contraseña ingresada por el usuario, combina la sal almacenada con esta contraseña y luego aplica bcrypt al resultado. Si el hash resultante coincide con el hash almacenado en la base de datos, la contraseña se considera válida.

En resumen, bcrypt no determina por sí mismo si una contraseña es válida o no. En su lugar, se utiliza para verificar si la contraseña ingresada por el usuario es la misma que la contraseña almacenada en la base de datos mediante la comparación de los hashes generados a partir de ambas contraseñas, teniendo en cuenta la sal asociada. Si coinciden, se considera que la contraseña es válida y se permite el acceso. Si no coinciden, la contraseña se considera incorrecta y se deniega el acceso.

## Links
- https://bcrypt.online/

- https://security.stackexchange.com/questions/17207/recommended-of-rounds-for-bcrypt/17238#17238

- https://en.wikipedia.org/wiki/Bcrypt