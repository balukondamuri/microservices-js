"use strict";
exports.__esModule = true;
var services_1 = require("../src/services");
var chai_1 = require("chai");
chai_1.should();
describe("Unit Test Suite", function () {
    var calc = new services_1.Calculate();
    it("adding two numbers", function () {
        var result = calc.add(2, 3);
        result.should.equal(5);
    });
    it("adding two negitive numbers should work", function () {
        var result = calc.add(-3, -4);
        result.should.equal(-7, "expected -7 but returned  " + result);
    });
});
