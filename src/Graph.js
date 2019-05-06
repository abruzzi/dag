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
        source = this.addNode(source);
        target = this.addNode(target);

        const edge = new Edge(source, target);

        if (this.hasEdge(edge)) {
            return;
        }

        source.addEdge(edge);
        target.addEdge(edge);

        this.edges.push(edge);

        return edge;
    }

    dfs = (g, s, cb) => {
        const visited = {};
        const head = g.nodes[s.id];

        const iterator = (head) => {
            visited[head.id] = true;
            head.adjacents().forEach(node => {
                if (!visited[node.id]) {
                    if (callback) {
                        callback(node);
                    }
                    iterator(node);
                }
            })
        }
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

    findAllRoutes = (graph, head) => {
      const routes = [];
      this.stacked(graph, head, (_, stack) => {
        routes.push(stack.slice());
      });

      return routes;
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