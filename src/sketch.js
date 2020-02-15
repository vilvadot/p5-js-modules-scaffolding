import Square from './components/Square.js'

const height = window.innerHeight
const width = window.innerWidth
const boxSize = 20

const setup = () => {
  createCanvas(width, height);
  background(40);
};

function draw() {
  background(40);
  new Square(width / 2, height / 2, boxSize, boxSize);
}

window.setup = setup;
window.draw = draw;