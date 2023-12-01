# Simple Data Structures Package

## Descripción

Este paquete ofrece una implementación eficiente y versátil de algunas estructura de datos conocidas

```
npm i simple-data-structures
```

Ejemplo uso Stack

```js
import { Stack } from 'simple-data-structures';

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

Ejemplo uso Queue

```js
import { Queue } from 'simple-data-structures';
/** @type {Queue<string>} */
const q = new Queue()

q.enqueue('hola')
q.enqueue('mundo')

console.log(q.dequeue()) // Salida: hola
console.log(q.dequeue()) // Salida: mundo
```

Ejemplo uso LinkedList

```js
import { LinkedList } from 'simple-data-structures';

/** @type {LinkedList<string>} */
const ll = new LinkedList()

ll.add('A')
ll.add('B')
ll.add('C')
ll.show() // A, B, C
console.log(ll.size())
ll.delete('C')
ll.show() // A, B
```

Ejemplo uso Graph

```js
import { Graph } from 'simple-data-structures';

/** @type {Graph} */
const g = new Graph()

g.addNode('A')
g.addNode('B')
g.addNode('C')

g.addEdge('A', 'B')
g.addEdge('A', 'B')
g.addEdge('B', 'C')
g.addEdge('C', 'A')


g.show()

/**
 * A -> B,C
 * B -> C
 * C -> A
 */
```

## Contribuciones

Las contribuciones son bienvenidas. Si tienes sugerencias para mejorar o ampliar la funcionalidad, no dudes en crear un issue o un pull request en el repositorio.
