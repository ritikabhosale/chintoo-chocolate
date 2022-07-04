class Field {
  #position;
  #dimensions;
  constructor(position, dimensions) {
    this.#position = position;
    this.#dimensions = dimensions;
  }

  #isTopEdge({ top }, { height }) {
    return top <= this.#position.top;
  }

  #isBottomEdge({ top }, { height }) {
    return top + height >= this.#position.top + this.#dimensions.height;
  }

  #isLeftEdge({ left }, { width }) {
    return left <= this.#position.left;
  }

  #isRightEdge({ left }, { width }) {
    return left + width >= this.#position.left + this.#dimensions.width;
  }

  isValidMove(direction, position, sizeOfElement) {
    switch (direction) {
      case 'ArrowUp': return !this.#isTopEdge(position, sizeOfElement);
      case 'ArrowDown': return !this.#isBottomEdge(position, sizeOfElement);
      case 'ArrowRight': return !this.#isRightEdge(position, sizeOfElement);
      case 'ArrowLeft': return !this.#isLeftEdge(position, sizeOfElement);
    }
  }

  getInfo() {
    const { top, left } = this.#position;
    const { height, width } = this.#dimensions;
    return { position: { top, left }, dimensions: { height, width } };
  }
}