const { Point } = require('./point.js');

class Character {
  #position;
  #energy;
  #symbol;

  constructor(symbol) {
    this.#position = new Point(0, 0);
    this.#energy = 100;
    this.#symbol = symbol;
  }

  stepRight() {
    this.#position = this.#position.translate(1, 0);
  }

  stepLeft() {
    this.#position = this.#position.translate(-1, 0);
  }

  stepForward() {
    this.#position = this.#position.translate(0, 1);
  }

  stepBackward() {
    this.#position = this.#position.translate(0, -1);
  }

  reduceEnergy(consumedEnergy) {
    this.#energy = this.#energy - consumedEnergy;
  }

  isAt(position) {
    return this.#position.equals(position);
  }

  write(screen) {
    screen.writeAt(this.#position, this.#symbol);
  }
}

module.exports = { Character };
