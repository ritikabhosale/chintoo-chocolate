class Screen {
  #width;
  #height;
  #blocks;
  constructor(width, height, blocks) {
    this.#width = width;
    this.#height = height;
    this.#blocks = blocks;
  }

  writeAt(x, y, char) {
    this.#blocks[y][x] = char;
  }

  reset() {
    this.#blocks = [];
    for (let index = 0; index < this.#height; index++) {
      this.#blocks.push(Array(this.#width).fill(' '));
    }
  }

  toString() {
    return this.#blocks.map(row => row.join('')).join('\n');
  }
}

const createScreen = (width, height) => {
  const screen = new Screen(width, height, []);
  screen.reset();
  return screen;
};

exports.createScreen = createScreen;
