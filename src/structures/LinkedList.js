/**
 * @template T
 */
export class NodeLinkedList {

  /** @type {NodeLinkedList<T>|null} */
  next = null

  /**
   * @param {T} value 
   */
  constructor(value) {
    this.value = value
  }
}

/**
 * @template T
 */
export class LinkedList {

  /** @type {NodeLinkedList<T>|null} */
  head = null

  constructor() { }

  /**
   * @param {T} value
   * @returns {void}
   */
  add(value) {
    /** @type {NodeLinkedList<T>} */
    const node = new NodeLinkedList(value)

    if (this.head === null) {
      this.head = node
    } else {
      /** @type {NodeLinkedList<T>} */
      let current = this.head

      while (current.next !== null) {
        current = current.next
      }

      current.next = node
    }
  }

  /**
   * @returns {void}
   */
  show() {
    /** @type {NodeLinkedList<T>|null} */
    let current = this.head

    while (current !== null) {
      console.log(current.value)
      current = current.next
    }
  }

  /**
   * @returns {number}
   */
  size() {
    /** @type {NodeLinkedList<T>|null} */
    let current = this.head
    let sum = 0

    while (current !== null) {
      sum++
      current = current.next
    }

    return sum
  }

  /**
   * @returns {void}
   */
  clear() {
    this.clear = null
  }

  /**
   * @param {T} value
   * @returns {void}
   */
  delete(value) {
    if (this.head === null) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    /** @type {NodeLinkedList<T>|null} */
    let current = this.head;
    /** @type {NodeLinkedList<T>|null} */
    let previous = null;

    while (current !== null) {
      if (current.value === value) {
        previous.next = current.next;
        return;
      }
      previous = current;
      current = current.next;
    }
  }


}
