import _ from 'lodash';

class Node {
    constructor(id, data) {
      this.id = id;
      this.data = data || {};
      this.edges = []
    }
  
    adjacents = () => {
      const nodes = [];
  
      this.edges.forEach(edge => {
        if(edge.target.id !== this.id) {
          nodes.push(edge.target);
        }
      })
  
      return nodes;
    }
  
    addEdge = (edge) => {
      if(!this.hasEdge(edge)) {
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