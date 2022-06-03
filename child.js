const { Point } = require('./point.js');

class Child {
  #position;
  constructor() {
    this.#position = new Point(0, 0);
  }
  stepForward() {
    this.#position = this.#position.translate(1, 0);
  }
  jump() {
    this.#position = this.#position.translate(3, 0);
  }
  getPosition() {
    return this.#position;
  }
}

exports.Child = Child;
