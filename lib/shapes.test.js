// shapes.test.js

const { Shape, Circle, Rectangle, Triangle } = require('./shapes');

test('setColor sets the color correctly for Shape class', () => {
  const shape = new Shape();
  shape.setColor('blue');
  expect(shape.color).toBe('blue');
});

test('render returns an empty string for the base Shape class', () => {
  const shape = new Shape();
  expect(shape.render()).toBe('');
});

test('render returns the correct SVG for Circle with color', () => {
  const circle = new Circle();
  circle.setColor('green');
  expect(circle.render()).toBe('<circle cx="150" cy="100" r="90" fill="green" />');
});

test('render returns the correct SVG for Rectangle with color', () => {
  const rectangle = new Rectangle();
  rectangle.setColor('red');
  expect(rectangle.render()).toBe('<rect x="10" y="10" width="280" height="180" fill="red" />');
});

test('render returns the correct SVG for Triangle with color', () => {
  const triangle = new Triangle();
  triangle.setColor('yellow');
  expect(triangle.render()).toBe('<polygon points="150,10 10,190 290,190" fill="yellow" />');
});