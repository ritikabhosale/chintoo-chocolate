class Chocolate {
  #position;
  #symbol;
  constructor(position, symbol) {
    this.#position = position;
    this.#symbol = symbol;
  }

  areYouAt(position) {
    return this.#position.equals(position);
  }

  getSymbol() {
    return this.#symbol;
  }
}

exports.Chocolate = Chocolate;
