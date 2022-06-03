class EventNotifier {
  #registry;
  constructor() {
    this.#registry = {};
  }

  register(event, action) {
    this.#registry[event] = this.#registry[event] || [];
    this.#registry[event].push(action);
  }

  notify(event, info) {
    this.#registry[event].forEach(action => action(info));
  }

  getEvents() {
    return Object.keys(this.#registry);
  }
}

exports.EventNotifier = EventNotifier;
