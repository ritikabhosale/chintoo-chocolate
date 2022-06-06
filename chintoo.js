const { Child } = require('./child.js');
const { EventEmitter } = require('events');
const { Chocolate } = require('./chocolate.js');
const { Point } = require('./point.js');
const { createScreen } = require('./screen.js');

const registerEvents = (chintoo, screen, chocolate) => {
  const eventEmitter = new EventEmitter();
  eventEmitter.on('forward', () => chintoo.stepForward());
  eventEmitter.on('backward', () => chintoo.stepBackward());
  eventEmitter.on('left', () => chintoo.stepLeft());
  eventEmitter.on('right', () => chintoo.stepRight());

  eventEmitter.on('display', () => {
    chocolate.write(screen);
    chintoo.write(screen);
    console.log(screen.toString());
  });
  return eventEmitter;
};

const main = () => {
  const chintoo = new Child('👶');
  const chocolate = new Chocolate(new Point(2, 2), '🍭');
  const screen = createScreen(3, 3);

  const eventEmitter = registerEvents(chintoo, screen, chocolate);
  process.stdin.setEncoding('utf8');

  console.log('Help chintoo get chocolate');
  eventEmitter.emit('display');

  process.stdin.on('data', (instruction) => {
    eventEmitter.emit(instruction.slice(0, -1));
    screen.reset();
    eventEmitter.emit('display');

    if (chintoo.areYouAt(chocolate.getPosition())) {
      console.log('Yayyy!!! Yummyyy...');
      process.exit();
    }
  });
};

main();
