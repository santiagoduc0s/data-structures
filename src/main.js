import { Graph } from "./index.js";

/** @type {Graph} */
const g = new Graph()

g.addNode('A')
g.addNode('B')
g.addNode('C')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'C')
g.addEdge('C', 'A')

g.show()