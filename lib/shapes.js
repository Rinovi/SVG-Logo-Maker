// shapes.js

class Shape {
  constructor() {
    this.color = 'black';
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return ''; // Implement common shape rendering logic here
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`;
  }
}

class Rectangle extends Shape {
  render() {
    return `<rect x="10" y="10" width="280" height="180" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,10 10,190 290,190" fill="${this.color}" />`;
  }
}

module.exports = { Shape, Circle, Rectangle, Triangle };