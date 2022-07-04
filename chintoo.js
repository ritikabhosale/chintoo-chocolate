const updateElement = (object) => {
  const { position: { top, left }, id } = object.getInfo();
  const element = document.getElementById(id);
  element.style.top = top;
  element.style.left = left;
};

const drawField = (field) => {
  const fieldElement = document.getElementById('field');
  const { position: { top, left }, dimensions: { height, width } } = field.getInfo();
  fieldElement.style.top = top;
  fieldElement.style.left = left;
  fieldElement.style.height = height;
  fieldElement.style.width = width;
  return fieldElement;
};

const drawElement = (fieldElement, object) => {
  const { id } = object.getInfo();
  const element = document.createElement('div');
  element.id = id;
  fieldElement.appendChild(element);
  updateElement(object);
};

const drawOnScreen = (field, chintoo, chocolate) => {
  const fieldElement = drawField(field);
  drawElement(fieldElement, chintoo);
  drawElement(fieldElement, chocolate);
};

const updateGame = (game, event, chintoo) => {
  game.update(event.key);
  updateElement(chintoo);
  if (game.isOver()) {
    removeEventListener('keydown', onKeyDown);
  }
};

const main = () => {
  const chintoo = new Character({ top: 470, left: 0 }, 'boy');
  const chocolate = new Food({ top: 0, left: 470 }, 'chocolate');
  const field = new Field({ top: 0, left: 0 }, { height: 500, width: 500 }, chintoo, chocolate);
  const game = new Game(field, chintoo, chocolate);
  drawOnScreen(field, chintoo, chocolate);
  addEventListener('keydown', onKeyDown = (event) => { updateGame(game, event, chintoo) });
};

window.onload = main;