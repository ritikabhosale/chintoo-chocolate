const { Child } = require('./child.js');
const { EventEmitter } = require('events');
const { GameField } = require('./gameField.js');
const { Chocolate } = require('./chocolate.js');
const { Point } = require('./point.js');

const main = () => {
  const eventEmitter = new EventEmitter();
  const chintoo = new Child('👶');
  const chocolate = new Chocolate(new Point(2, 2), '🍭');
  const gameField = new GameField(3, 3);
  gameField.set();

  eventEmitter.on('stepForward', () => chintoo.stepForward());
  eventEmitter.on('stepForward', () =>
    console.log(gameField.show(chintoo, chocolate)));

  eventEmitter.on('stepBackward', () => chintoo.stepBackward());
  eventEmitter.on('stepBackward', () =>
    console.log(gameField.show(chintoo, chocolate)));

  eventEmitter.on('stepLeft', () => chintoo.stepLeft());
  eventEmitter.on('stepLeft', () =>
    console.log(gameField.show(chintoo, chocolate)));

  eventEmitter.on('stepRight', () => chintoo.stepRight());
  eventEmitter.on('stepLeft', () =>
    console.log(gameField.show(chintoo, chocolate)));
};

main();
