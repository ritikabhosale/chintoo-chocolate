const { Child } = require('./child.js');
const { EventNotifier } = require('./eventNotifier.js');

const main = () => {
  const eventNotifier = new EventNotifier();
  const chintoo = new Child();

  eventNotifier.register('stepForward', () => chintoo.stepForward());
  eventNotifier.register('jump', () => chintoo.jump());

  eventNotifier.notify('stepForward');
}

main();
