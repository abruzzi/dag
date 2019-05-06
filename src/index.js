import Graph from './Graph';

const g = new Graph();

g.addEdge('0', '1');
g.addEdge('1', '2');
g.addEdge('2', '3');
g.addEdge('3', '4');
g.addEdge('4', '5');
g.addEdge('5', '11');
g.addEdge('4', '6');
g.addEdge('6', '7');
g.addEdge('7', '8');
g.addEdge('7', '9');
g.addEdge('8', '11');
g.addEdge('9', '10');
g.addEdge('9', '11');
g.addEdge('10', '11');
g.addEdge('3', '11');
g.addEdge('11', '12');
g.addEdge('12', '13');
g.addEdge('13', '14');
g.addEdge('14', '15');

const routes = g.routes({from: '0', to: '15'});

routes.forEach(r => console.log(r.map(x => x.id)))
console.log(routes.length);