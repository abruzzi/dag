import _ from 'lodash';

import Node from './Node';
import Edge from './Edge';

class Graph {
    nodes = {}
    edges = []

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

    stacked = (g, head, callback) => {
      const stack = [];
      const from = g.nodes[head];

      stack.push(from);

      const iterator = (s) => {
        for(let i = 0; i < s.edges.length; ++i) {
          if(s.edges[i].target.id !== s.id) {
            const edge = s.edges[i];
            const node = edge.target;

            if(_.find(stack, {id: node.id})) {
              continue;
            }

            stack.push(node);

            if(callback) {
              callback(node, stack);
            }

            iterator(node);
            stack.pop();
          }
        } 
      }

      iterator(from);
    }

    routes = (options) => {
      const routes = [];

      this.stacked(this, options.from, (node, stack) => {
        if(node.id === options.to) {
          routes.push(stack.slice())
        }
      })

      return routes;
    }
}

export default Graph;