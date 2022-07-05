const updateElement = (object) => {
  const { position: { top, left }, id, height } = object.getInfo();
  const element = document.getElementById(id);
  element.style.top = top;
  element.style.left = left;
  element.style.height = height;
  element.style.fontSize = height;
};

const updateMessage = (message) => {
  const messageElement = document.getElementById('message');
  messageElement.innerText = message;
};

const drawField = (field) => {
  const fieldElement = document.getElementById('field');
  const { position: { top, left }, height } = field.getInfo();
  fieldElement.style.top = top;
  fieldElement.style.left = left;
  fieldElement.style.height = height;
  return fieldElement;
};

const drawElement = (fieldElement, object) => {
  const { id } = object.getInfo();
  const element = document.createElement('div');
  element.id = id;
  fieldElement.appendChild(element);
  updateElement(object);
};

const drawOnScreen = (game, field, chintoo, chocolate) => {
  const fieldElement = drawField(field);
  updateMessage(game.getMessage());
  drawElement(fieldElement, chintoo);
  drawElement(fieldElement, chocolate);
};

const removeElement = object => {
  const { id } = object.getInfo();
  const element = document.getElementById(id);
  element.remove();
};

const updateGame = (game, event, chintoo, chocolate) => {
  game.update(event.key);
  updateElement(chintoo);
  if (game.isOver()) {
    removeElement(chocolate);
    removeEventListener('keydown', onKeyDown);
  }
  updateMessage(game.getMessage());
};

const main = () => {
  const chintoo = new Character({ top: 670, left: 0 }, 30, 'boy');
  const chocolate = new Food({ top: 0, left: 670 }, 30, 'chocolate');
  const field = new Field({ top: 0, left: 0 }, 700);
  const game = new Game(field, chintoo, chocolate);
  drawOnScreen(game, field, chintoo, chocolate);
  addEventListener('keydown', onKeyDown = (event) => {
    updateGame(game, event, chintoo, chocolate)
  });
};

window.onload = main;