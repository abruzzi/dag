import _ from 'lodash';

import Node from './Node';
import Edge from './Edge';

class Graph {
  constructor() {
    this.nodes = {};
    this.edges = [];
  }

  addNode = (id, data) => {
    const node = new Node(id, data);

    if (!this.hasNode(node)) {
      this.nodes[node.id] = node;
    }

    return this.nodes[node.id];
  }

  hasNode = (node) => {
    return _.some(this.nodes, n => n.equals(node));
  }

  hasEdge = (from, to) => {
    return _.some(this.edges, edge => edge.equals(new Edge(from, to)));
  }

  addEdge = (source, target) => {
    const from = this.addNode(source);
    const to = this.addNode(target);

    const edge = new Edge(from, to);

    if (this.hasEdge(edge)) {
      return;
    }

    from.addEdge(edge);
    to.addEdge(edge);

    this.edges.push(edge);

    return edge;
  }

  stacked = (graph, head, callback) => {
    const stack = [];
    const from = graph.nodes[head];

    stack.push(from);

    const iterator = (node) => {
      node.edges.forEach(edge => {
        if(edge.target.id !== node.id) {
          const node = edge.target;

          if (!_.find(stack, {id: node.id})) {
            stack.push(node);

            if (callback) {
              callback(node, stack);
            }

            iterator(node);
            stack.pop();
          }
        }
      })
    };

    iterator(from);
  };

  routes = (options) => {
    const routes = [];

    this.stacked(this, options.from, (node, stack) => {
      if (node.id === options.to) {
        routes.push(stack.slice())
      }
    });

    return routes;
  }

  mermaidify = () => {
    console.log('graph LR');
    this.edges.forEach(edge => {
      console.log(`${edge.source.id} --> ${edge.target.id}`);
    })
  }
}

export default Graph;