const { Point } = require('./point.js');

class Child {
  #position;
  #energy;

  constructor() {
    this.#position = new Point(0, 0);
    this.#energy = 100;
  }

  stepForward() {
    this.#position = this.#position.translate(1, 0);
  }

  jump() {
    this.#position = this.#position.translate(3, 0);
  }

  reduceEnergy(consumedEnergy) {
    this.#energy = this.#energy - consumedEnergy;
  }

  getPosition() {
    return this.#position;
  }

  getEnergy() {
    return this.#energy;
  }
}

exports.Child = Child;
