class Food {
  #position;
  #id;
  #height;
  constructor(position, height, id) {
    this.#position = position;
    this.#height = height;
    this.#id = id;
  }

  getInfo() {
    const { top, left } = this.#position;
    return { position: { top, left }, height: this.#height, id: this.#id };
  }
}
