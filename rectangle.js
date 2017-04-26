'use strict'
let Shape = require('ull-shape');
class Rectangle extends Shape {
    constructor(options) {
      super(options)
    }
    area() {
      return this.width * this.height;
    }
}
Shape.Shapes.Rectangle = Rectangle;
module.exports = Rectangle;
