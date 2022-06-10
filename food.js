class Food {
  #position;
  #symbol;
  constructor(position, symbol) {
    this.#position = position;
    this.#symbol = symbol;
  }

  getPosition() {
    return this.#position;
  }

  write(screen) {
    screen.writeAt(this.#position, this.#symbol);
  }
}

module.exports = { Food };
