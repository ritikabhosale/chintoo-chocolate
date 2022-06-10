const { Character } = require('./character.js');
const { createScreen } = require('./screen.js');
const { Game } = require('./game.js');
const { Food } = require('./food.js');
const { Point } = require('./point.js');

const main = () => {
  const chintoo = new Character('👶');
  const chocolate = new Food(new Point(2, 2), '🍭');
  const screen = createScreen(3, 3);
  const game = new Game(chintoo, chocolate, screen);
  console.log(game.display());
  process.stdin.setEncoding('utf8');

  process.stdin.on('data', (instruction) => {
    game.update(instruction.trim());
    console.log(game.display());

    if (game.isOver()) {
      console.log('Yayyy!!! Yummyyy...');
      process.exit();
    }
  });
};

main();
