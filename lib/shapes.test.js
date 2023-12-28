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