import { StackEmpty } from "../exceptions/index.js"

// last in first out

/**
 * @template T El tipo de elementos que la pila almacenará.
 */
export class Stack {

  constructor() {
    /** @type {T[]} */
    this.items = []
  }

  /**
   * @param {T} item El elemento a añadir a la pila.
   * @returns {void}
   */
  push(item) {
    this.items.push(item)
  }

  /**
   * Retorna el utilmo elemento agregado a la pila y lo elimina
   * @returns {T}
   * @throws {StackEmpty}
   */
  pop() {
    if (this.isEmpty()) throw new StackEmpty() 

    return this.items.pop()
  }

  /**
   * Retorna el utilmo elemento agregado a la pila y no lo elimina
   * @returns {T}
   * @throws {StackEmpty}
   */
  peek() {
    if (this.isEmpty()) throw new StackEmpty() 

    return this.items[this.items.length - 1]
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
