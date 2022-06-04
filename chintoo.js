const fs = require('fs');
const { Child } = require('./child.js');
const { EventEmitter } = require('events');
const { GameField } = require('./gameField.js');
const { Chocolate } = require('./chocolate.js');
const { Point } = require('./point.js');

const registerEvents = (chintoo, gameField, chocolate) => {
  const eventEmitter = new EventEmitter();
  eventEmitter.on('stepForward', () => chintoo.stepForward());
  eventEmitter.on('stepForward', () => console.log(gameField.show(chintoo, chocolate)));

  eventEmitter.on('stepBackward', () => chintoo.stepBackward());
  eventEmitter.on('stepBackward', () => console.log(gameField.show(chintoo, chocolate)));

  eventEmitter.on('stepLeft', () => chintoo.stepLeft());
  eventEmitter.on('stepLeft', () => console.log(gameField.show(chintoo, chocolate)));

  eventEmitter.on('stepRight', () => chintoo.stepRight());
  eventEmitter.on('stepRight', () => console.log(gameField.show(chintoo, chocolate)));

  return eventEmitter;
}

const getLastInstruction = (instructions) => {
  return instructions.split('\n').pop();
};

const main = () => {
  const chintoo = new Child('👶');
  const chocolate = new Chocolate(new Point(2, 2), '🍭');
  const gameField = new GameField(3, 3);
  gameField.set();

  const eventEmitter = registerEvents(chintoo, gameField, chocolate);
  fs.watchFile('./input.txt', () => {
    const instructions = fs.readFileSync('./input.txt', 'utf8');
    const instruction = getLastInstruction(instructions);
    eventEmitter.emit(instruction);
  });
};

main();
