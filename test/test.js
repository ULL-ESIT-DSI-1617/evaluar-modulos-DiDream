'use strict'
let Shape = require('@didream/ull-shape');
let Rectangle = require('../rectangle');
let exec = require('child_process').exec;

describe("rectangle properties",function(){
    it("must have a width and height",function(){
        let a = new Rectangle({ width: 100, height: 50 });
        a.should.have.property('width');
        a.should.have.property('height');
    })
});
describe("getArea", function(){
    it("must compute the rectangle area correctly. Shape object",function(){
        let a = new Shape({ width: 100, height: 50 }, 'Rectangle');
        let s = a.getArea();
        s.should.be.equal(5000);
    });
    it("must compute the rectangle area correctly. Rectangle object", function() {
        let a = new Rectangle({ width: 100, height: 50 });
        let s = a.getArea();
        s.should.be.equal(5000);
    });
    var area;
    before(function(done){
        exec('node_modules/.bin/team-area Rectangle "{ width: 100, height:50 }" test', function(err, stdout, stderr){
            area = stdout;
            done();
        });
    })
    it("get area via command line",function(){

        Number(area).should.be.equal(5000);
    })
});
