const { Triangle, Circle, Square } = require('./shapes-test');

describe('Triangle', () => {
  test('should render the triangle SVG string with the given shape color', () => {
    const shape = new Triangle();
    //change color here
    const color = 'blue';
    shape.setColor(color);
    const renderedSVG = shape.render();

    console.log(`Triangle color: ${color}`);
    console.log(`Rendered SVG: ${renderedSVG}`);

    expect(renderedSVG).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`);
  });
});

describe('Circle', () => {
  test('should render the circle SVG string with the given shape color', () => {
    const shape = new Circle();
    //change color here
    const color = 'red';
    shape.setColor(color);
    const renderedSVG = shape.render();

    console.log(`Circle color: ${color}`);
    console.log(`Rendered SVG: ${renderedSVG}`);

    expect(renderedSVG).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`);
  });
});

describe('Square', () => {
  test('should render the square SVG string with the given shape color', () => {
    const shape = new Square();
    //change color here
    const color = 'black';
    shape.setColor(color);
    const renderedSVG = shape.render();

    console.log(`Square color: ${color}`);
    console.log(`Rendered SVG: ${renderedSVG}`);

    expect(renderedSVG).toEqual(`<rect x="80" y="60" width="140" height="140" fill="${color}" />`);
  });
});
