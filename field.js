class Field {
  #position;
  #dimensions;
  constructor(position, dimensions) {
    this.#position = position;
    this.#dimensions = dimensions;
  }

  #isTopEdge({ top }) {
    return top <= this.#position.top;
  }

  #isBottomEdge({ top }) {
    return top + 30 >= this.#position.top + this.#dimensions.height;
  }

  #isLeftEdge({ left }) {
    return left <= this.#position.left;
  }

  #isRightEdge({ left }) {
    return left >= this.#position.left + this.#dimensions.width;
  }

  isValidMove(position, direction) {
    switch (direction) {
      case 'ArrowUp': return !this.#isTopEdge(position);
      case 'ArrowDown': return !this.#isBottomEdge(position);
      case 'ArrowRight': return !this.#isRightEdge(position);
      case 'ArrowLeft': return !this.#isLeftEdge(position);
    }
  }

  getInfo() {
    const { top, left } = this.#position;
    const { height, width } = this.#dimensions;
    return { position: { top, left }, dimensions: { height, width } };
  }
}