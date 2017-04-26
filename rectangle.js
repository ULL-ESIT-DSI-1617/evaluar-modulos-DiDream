'use strict'
let Shape = require('@didream/ull-shape');
class Rectangle extends Shape {
    constructor(options) {
      super(options)
    }
    area() {
      return this.width * this.height;
    }
}
Shape.Shapes.Square = Rectangle;
module.exports = Rectangle;
