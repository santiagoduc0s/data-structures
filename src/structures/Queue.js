import { QueueEmpty } from '../exceptions/index.js'

// first in first out

/**
 * @template T El tipo de elementos que la pila almacenará.
 */
export class Queue {
  items = []

  /**
   * Agrega un elemento a la cola
   * @param {T}
   * @returns {void}
   */
  enqueue(item) {
    this.items.push(item)
  }

  /**
   * @returns {T}
   */
  dequeue() {
    if (this.isEmpty()) throw new QueueEmpty()
    return this.items.shift()
  }

  /**
   * Verifica si el stack esta vacio
   * @returns {boolean}
   */
  isEmpty() {
    return this.items.length === 0
  }

  /**
   * Retrona el tamaño del stack
   * @returns {number}
   */
  size() {
    return this.items.length
  }
}