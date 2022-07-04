class Character {
  #position;
  #energy;
  #id;

  constructor(position, id) {
    this.#position = position;
    this.#id = id;
  }

  stepRight() {
    this.#position.left += 10;
  }

  stepLeft() {
    this.#position.left -= 10;
  }

  stepForward() {
    this.#position.top -= 10;
  }

  stepBackward() {
    this.#position.top += 10;
  }

  reduceEnergy(consumedEnergy) {
    this.#energy = this.#energy - consumedEnergy;
  }

  getInfo() {
    const { top, left } = this.#position;
    return { position: { top, left }, id: this.#id };
  }
}
