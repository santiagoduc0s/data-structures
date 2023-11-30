import { Queue } from "./index.js";

/** @type {Queue<string>} */
const q = new Queue()


q.enqueue('hola ')
q.enqueue('mundo')
console.log(q.dequeue())