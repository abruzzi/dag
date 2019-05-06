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

g.routes({from: '0', to: '15'}).forEach(r => console.log(r.map(x => x.id)))
g.mermaidify();

const q = new Graph();
q.addEdge('0', '1');
q.addEdge('1', '2');
q.addEdge('1', '5');

q.addEdge('2', '3');
q.addEdge('3', '4');
q.addEdge('3', '9');
q.addEdge('4', 'e');

q.addEdge('5', '6');
q.addEdge('6', '7');
q.addEdge('6', '9');
q.addEdge('7', '8');
q.addEdge('8', '9');

q.addEdge('9', '10');
q.addEdge('10', '11');
q.addEdge('11', '12');
q.addEdge('12', '13');
q.addEdge('13', '14');
q.addEdge('14', '15');
q.addEdge('15', '16');
q.addEdge('16', 'e');

q.addEdge('10', '15');
q.addEdge('11', '15');
q.addEdge('13', '15');

q.routes({from: '0', to: '15'}).forEach(r => console.log(r.map(x => x.id)));

q.mermaidify();