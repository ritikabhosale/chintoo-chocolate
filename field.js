class Field {
  #position;
  #dimensions;
  #boy;
  #chocolate;
  constructor(position, dimensions, boy, chocolate) {
    this.#position = position;
    this.#dimensions = dimensions;
    this.#boy = boy;
    this.#chocolate = chocolate;
  }

  #isTopEdge() {
    const { position: { top } } = this.#boy.getInfo();
    return top <= this.#position.top;
  }

  #isBottomEdge() {
    const { position: { top } } = this.#boy.getInfo();
    return top + 30 >= this.#position.top + this.#dimensions.height;
  }

  #isLeftEdge() {
    const { position: { left } } = this.#boy.getInfo();
    return left <= this.#position.left;
  }

  #isRightEdge() {
    const { position: { left } } = this.#boy.getInfo();
    return left >= this.#position.left + this.#dimensions.width;
  }

  isValidMove(direction) {
    switch (direction) {
      case 'ArrowUp': return !this.#isTopEdge();
      case 'ArrowDown': return !this.#isBottomEdge();
      case 'ArrowRight': return !this.#isRightEdge();
      case 'ArrowLeft': return !this.#isLeftEdge();
    }
  }

  getInfo() {
    const { top, left } = this.#position;
    const { height, width } = this.#dimensions;
    return { position: { top, left }, dimensions: { height, width } };
  }
}