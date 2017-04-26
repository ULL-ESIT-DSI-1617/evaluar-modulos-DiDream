'use strict'
let Shape = require('@didream/ull-shape');

class Triangle extends Shape {
    constructor(options) {
      super(options)
    }
    area() {
      return 0.5 * this.width * this.height;
    }
}
module.exports = Triangle;
