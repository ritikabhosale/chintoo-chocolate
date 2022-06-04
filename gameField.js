const { Point } = require("./point");

const concatSeperator = (char, index, width) => {
  let seperator = ' ';
  if ((index + 1) % width === 0) {
    seperator = '\n';
  }
  return char + seperator;
}

class GameField {
  #length;
  #width;
  #blocks;

  constructor(length, width) {
    this.#length = length;
    this.#width = width;
    this.#blocks = [];
  }

  set() {
    let blockIndex = 0;
    for (let y = this.#length - 1; y >= 0; y--) {
      for (let x = 0; x < this.#width; x++) {
        const coordinate = new Point(x, y);
        this.#blocks.push({ blockIndex, coordinate })
        blockIndex++;
      }
    }
  }

  #blockIndex(entity) {
    const block = this.#blocks.find(({ coordinate }) =>
      entity.areYouAt(coordinate));
    return block.blockIndex;
  }

  #constructField(boy, chocolate) {
    const blockSymbols = Array(this.#blocks.length).fill('--');

    const boyPosition = this.#blockIndex(boy);
    const chocolatePosition = this.#blockIndex(chocolate);

    blockSymbols[chocolatePosition] = chocolate.getSymbol();
    blockSymbols[boyPosition] = boy.getSymbol();

    return blockSymbols;
  }

  show(boy, chocolate) {
    const field = this.#constructField(boy, chocolate);
    return field.map((char, index) =>
      concatSeperator(char, index, this.#width)).join('');
  }
}

exports.GameField = GameField;