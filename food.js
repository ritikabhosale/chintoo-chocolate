class Food {
  #position;
  #id;
  constructor(position, id) {
    this.#position = position;
    this.#id = id;
  }

  getInfo() {
    const { top, left } = this.#position;
    return { position: { top, left }, id: this.#id };
  }
}
