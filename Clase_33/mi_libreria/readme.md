# Calculadora Simple

Una librería de JavaScript que proporciona funciones para realizar operaciones matemáticas básicas como suma, resta, multiplicación y división.

## Instalación

Puedes instalar esta librería utilizando npm:

```bash
npm install calculadora-simple
```

## Uso

Para utilizar la librería en tu proyecto, primero debes importarla:

```javascript
const calculator = require('calculadora-simple');
```

Luego, puedes utilizar las funciones de la calculadora como sigue:

```javascript
console.log(calculator.sum(5, 3)); // Suma: 8
console.log(calculator.subtract(5, 3)); // Resta: 2
console.log(calculator.multiply(5, 3)); // Multiplicación: 15
console.log(calculator.divide(5, 3)); // División: 1.6666666666666667
```

## Funciones

### `sum(a, b)`

Realiza una suma de dos números y devuelve el resultado.

### `subtract(a, b)`

Realiza una resta de dos números y devuelve el resultado.

### `multiply(a, b)`

Realiza una multiplicación de dos números y devuelve el resultado.

### `divide(a, b)`

Realiza una división de dos números y devuelve el resultado. Si se intenta dividir por cero, se generará un error.

## Contribuciones

Si encuentras algún problema o tienes ideas para mejorar esta librería, por favor, [crea un issue en GitHub](https://github.com/tuusuario/calculadora-simple/issues).

Si quieres contribuir directamente al código, puedes hacerlo enviando un pull request. Asegúrate de seguir las pautas de contribución.

## Licencia

Esta librería está bajo la Licencia MIT. Puedes ver el archivo [LICENSE](LICENSE) para más detalles.
