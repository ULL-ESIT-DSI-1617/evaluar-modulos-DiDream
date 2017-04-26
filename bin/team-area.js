#! /usr/bin/env node
'use strict'
let util = require('util');

try {
    let type=process.argv[2];
    let Shape = require(`@didream/ull-shape-${type.toLowerCase()}`);
    let obj = eval('('+process.argv[3]+')');
    let t= new Shape(obj);
    let s= t.getArea();
    console.log(s);

}catch(e) {
    console.log(e.message);
}
