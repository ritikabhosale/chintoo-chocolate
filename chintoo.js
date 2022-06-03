const { Child } = require('./child.js');
const { EventEmitter } = require('events');

const main = () => {
  const eventEmitter = new EventEmitter();
  const chintoo = new Child();

  eventEmitter.on('stepForward', () => chintoo.stepForward());
  eventEmitter.on('stepForward', () => chintoo.reduceEnergy(1));

  eventEmitter.on('jump', () => chintoo.jump());
  eventEmitter.on('jump', () => chintoo.reduceEnergy(2));

  eventEmitter.emit('jump');
  eventEmitter.emit('stepForward');
};

main();
