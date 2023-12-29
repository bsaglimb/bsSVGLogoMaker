// Importing Triangle, Square, Circle classes from ./shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");

// Unit testing -> testing for a triangle with a pink background to render
describe("Triangle test", () => {
  test("test for a triangle with a pink background", () => {
    const shape = new Triangle();
    shape.setColor("pink");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="pink" />'
    );
  });
});

// Unit testing -> testing for a square with a green background to render
describe("Square test", () => {
  test("test for a square with a green background", () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="green" />'
    );
  });
});

// Unit testing -> testing for a circle with a #FFB6C1 background to render
describe("Circle test", () => {
  test("test for a circle with a #FFB6C1 background", () => {
    const shape = new Circle();
    shape.setColor("#FFB6C1");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#FFB6C1" />'
    );
  });
});
