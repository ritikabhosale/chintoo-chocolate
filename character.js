class Character {
  #position;
  #size;
  #id;

  constructor(position, size, id) {
    this.#position = position;
    this.#size = size;
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

  getInfo() {
    const { top, left } = this.#position;
    const { height, width } = this.#size;
    return { position: { top, left }, size: { height, width }, id: this.#id };
  }
}
