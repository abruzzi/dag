import Node from './Node';
import Edge from './Edge';

import Graph from './Graph';

const g = new Graph();

g.addEdge('a', 'b');
g.addEdge('a', 'c');
g.addEdge('b', 'd');
g.addEdge('c', 'd');

const a = new Node('a');
const b = new Node('b');

const routes = g.routes({from: 'a', to: 'd'});
console.log(routes);