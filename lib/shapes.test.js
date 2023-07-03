const { Triangle, Circle, Square } = require('./shapes-test');

describe('Triangle', () => {
  test('should render the triangle SVG string with the given shape color', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe('Circle', () => {
  test('should render the circle SVG string with the given shape color', () => {
    const shape = new Circle();
    shape.setColor('red');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
  });
});

describe('Square', () => {
  test('should render the square SVG string with the given shape color', () => {
    const shape = new Square();
    shape.setColor('green');
    expect(shape.render()).toEqual('<rect x="80" y="60" width="140" height="140" fill="green" />');
  });
});
