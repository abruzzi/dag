class Edge {
  constructor(source, target) {
    this.source = source;
    this.target = target;
  }

  equals = (edge) => {
    return edge.source.id === this.source.id &&
      edge.target.id === this.target.id;
  }
}

export default Edge;