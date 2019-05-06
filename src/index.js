import _ from 'lodash';

class Node {
  constructor(id, data) {
    this.id = id;
    this.data = data || {};
    this.edges = []
  }


}

class Edge {
}

class Graph {
  nodes = {}
  edges = []
}