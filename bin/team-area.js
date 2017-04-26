#! /usr/bin/env node
'use strict'
let util = require('util');
let shape = require('../shapesarea');

try {
    let type=process.argv[2];
    let Module = require(`@didream/ull-shape-${type.toLowerCase()}`);
    let obj = JSON.parse(process.argv[3].toString());
    let t= new Shape(obj,type);
    let s= t.getArea();
    console.log(s);

}catch(e) {
    console.log(e.message);
}
