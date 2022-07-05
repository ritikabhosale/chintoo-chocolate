class Game {
  #character;
  #food;
  #field;
  #displacement;
  #minMoves;

  constructor(field, character, food) {
    this.#field = field;
    this.#character = character;
    this.#food = food;
    this.#displacement = this.#calculateDisplacement();
    this.#minMoves = this.#calculateMoves();
  }

  #calculateDisplacement = () => {
    const { height: fieldHeight } = this.#field.getInfo();
    const { height: elementHeight } = this.#character.getInfo();
    return (fieldHeight - elementHeight) / 10;
  }

  #calculateMoves = () => {
    const { position: { top: charTop, left: charLeft } } = this.#character.getInfo();
    const { position: { top: foodTop, left: foodLeft } } = this.#food.getInfo();
    const noOfMoves = Math.abs(foodTop - charTop) / this.#displacement
    return noOfMoves + Math.abs(foodLeft - charLeft) / this.#displacement
  }

  update(direction) {
    const { position, height } = this.#character.getInfo();
    if (this.#field.isValidMove(direction, position, height)) {
      this.#minMoves--;
      switch (direction) {
        case 'ArrowUp': this.#character.stepForward(this.#displacement);
          break;
        case 'ArrowDown': this.#character.stepBackward(this.#displacement);
          break;
        case 'ArrowRight': this.#character.stepRight(this.#displacement);
          break;
        case 'ArrowLeft': this.#character.stepLeft(this.#displacement);
          break;
      }
    }
  }

  getMessage() {
    if (this.#reachedChocolate()) {
      return 'Yayyy chintoo got his chocolate.';
    }
    if (this.#areMovesOver()) {
      return 'You ran out of moves.';
    }
    return `Moves : ${this.#minMoves}`;
  }

  #areMovesOver() {
    return this.#minMoves === 0;
  }

  #reachedChocolate() {
    const { position: characterPosition } = this.#character.getInfo();
    const { position: food } = this.#food.getInfo();
    return characterPosition.top === food.top &&
      characterPosition.left === food.left;
  }

  isOver() {
    return this.#reachedChocolate() || this.#areMovesOver();
  }
}