class Character {
  #position;
  #id;
  #height;

  constructor(position, height, id) {
    this.#position = position;
    this.#height = height;
    this.#id = id;
  }

  stepRight(noOfsteps) {
    this.#position.left += noOfsteps;
  }

  stepLeft(noOfsteps) {
    this.#position.left -= noOfsteps;
  }

  stepForward(noOfsteps) {
    this.#position.top -= noOfsteps;
  }

  stepBackward(noOfsteps) {
    this.#position.top += noOfsteps;
  }

  getInfo() {
    const { top, left } = this.#position;
    return { position: { top, left }, height: this.#height, id: this.#id };
  }
}
