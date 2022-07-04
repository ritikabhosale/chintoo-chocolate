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

  updatePosition(direction) {
    switch (direction) {
      case 'ArrowUp': if (!this.#isTopEdge()) {
        this.#boy.stepForward();
      };
        break;
      case 'ArrowDown': if (!this.#isBottomEdge()) {
        this.#boy.stepBackward();
      };
        break;
      case 'ArrowRight': if (!this.#isRightEdge()) {
        this.#boy.stepRight();
      };
        break;
      case 'ArrowLeft': if (!this.#isLeftEdge()) {
        this.#boy.stepLeft();
      };
        break;
    }
  }
  getInfo() {
    const { top, left } = this.#position;
    const { height, width } = this.#dimensions;
    return { position: { top, left }, dimensions: { height, width } };
  }
}