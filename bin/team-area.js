#! /usr/bin/env node
'use strict'
let util = require('util');
let Shape = require('@didream/ull-shape');
let execSync = require('child_process').execSync;
try {
    let type=process.argv[2];
    var modulePath = '@didream/ull-shape-';
    if(process.argv[4] === 'test'){

        //return node_modules path
        var node_modulesPath = execSync('npm root',{encoding:'utf-8'});
        modulePath = `${node_modulesPath}/../`;
    }

    let Module = require(modulePath + type.toLowerCase());
    let obj = eval('('+process.argv[3]+')');
    let t= new Shape(obj,type);
    let s= t.getArea();
    console.log(s);

}catch(e) {
    console.log(e.message);
}
