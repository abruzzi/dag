import _ from 'lodash';

class Node {
  constructor(id, data) {
    this.id = id;
    this.data = data || {};
    this.edges = []
  }

  addEdge = (edge) => {
    if (!this.hasEdge(edge)) {
      this.edges.push(edge);
    }
  }

  hasEdge = (edge) => {
    return _.some(this.edges, e => e.equals(edge));
  }

  equals = (node) => {
    return node.id === this.id;
  }
}

export default Node;