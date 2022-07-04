class Field {
  #position;
  #height;
  constructor(position, height) {
    this.#position = position;
    this.#height = height;
  }

  #isTopEdge({ top }, height) {
    return top <= this.#position.top;
  }

  #isBottomEdge({ top }, height) {
    return top + height >= this.#position.top + this.#height;
  }

  #isLeftEdge({ left }, height) {
    return left <= this.#position.left;
  }

  #isRightEdge({ left }, height) {
    return left + height >= this.#position.left + this.#height;
  }

  isValidMove(direction, position, height) {
    switch (direction) {
      case 'ArrowUp': return !this.#isTopEdge(position, height);
      case 'ArrowDown': return !this.#isBottomEdge(position, height);
      case 'ArrowRight': return !this.#isRightEdge(position, height);
      case 'ArrowLeft': return !this.#isLeftEdge(position, height);
    }
  }

  getInfo() {
    const { top, left } = this.#position;
    return { position: { top, left }, height: this.#height };
  }
}