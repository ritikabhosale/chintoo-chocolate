class Food {
  #position;
  #symbol;
  constructor(position, symbol) {
    this.#position = position;
    this.#symbol = symbol;
  }

  isAt(position) {
    return this.#position.equals(position);
  }

  getSymbol() {
    return this.#symbol;
  }

  getPosition() {
    return this.#position;
  }

  write(screen) {
    screen.writeAt(this.#position.x, this.#position.y, this.#symbol);
  }
}

module.exports = { Food };
