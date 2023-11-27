# Simple Data Structures Package

## Descripción

Este paquete ofrece una implementación eficiente y versátil de algunas estructura de datos conocidas

```
npm i simple-data-structures
```

Ejemplo uso Stack

```js
import { Stack } from 'santiagoduc0s/data-structures';

/** @type {Stack<number>} */
const miPila = new Stack();

// Agregar elementos
miPila.push(1);
miPila.push(2);

// Inspeccionar el último elemento
console.log(miPila.peek()); // Salida: 2

// Remover y obtener el último elemento
console.log(miPila.pop()); // Salida: 2

// Verificar si la pila está vacía
console.log(miPila.isEmpty()); // Salida: false

// Obtener el tamaño de la pila
console.log(miPila.size()); // Salida: 1
```

## Contribuciones

Las contribuciones son bienvenidas. Si tienes sugerencias para mejorar o ampliar la funcionalidad, no dudes en crear un issue o un pull request en el repositorio.
