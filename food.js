class Food {
  #position;
  #id;
  #size;
  constructor(position, size, id) {
    this.#position = position;
    this.#size = size;
    this.#id = id;
  }

  getInfo() {
    const { top, left } = this.#position;
    const { height, width } = this.#size;
    return { position: { top, left }, size: { height, width }, id: this.#id };
  }
}
