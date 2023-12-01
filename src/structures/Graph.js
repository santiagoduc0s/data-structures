export class GraphNode {
  /** @type {Array<GraphNode>} node */
  edges = []

  constructor(value) {
    this.value = value
  }

  /** 
   * @param {GraphNode} node 
   */
  addEdge(node) {
    this.edges.push(node)
  }
}

export class Graph {
  nodes = new Map()

  addNode(value) {
    const node = new GraphNode(value)
    this.nodes.set(value, node)
  }


  addEdge(startValueNode, endValueNode) {
    /** @type {GraphNode} */
    const startNode = this.nodes.get(startValueNode)
    /** @type {GraphNode} */
    const endNode = this.nodes.get(endValueNode)

    if (startNode && endNode) {
      startNode.addEdge(endNode)
    }
  }

  show() {
    for (const node of this.nodes.values()) {
      const edges = node.edges.map(edge => edge.value).join()
      console.log(`${node.value} -> ${edges}`)
    }
  }

}