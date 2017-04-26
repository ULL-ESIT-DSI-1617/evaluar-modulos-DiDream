'use strict'
let Shape = require('@didream/ull-shape');
class Square extends Shape {
    constructor(options) {
      super(options)
    }
    area() {
      return  Math.pow(this.width,2)
    }
}
Shape.Shapes.Square = Square;
module.exports = Shape;
