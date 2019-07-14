"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var request = require('request');
chai_1.should();
describe("Integration test suite", function () {
    describe("get tests", function () {
        it("should get hello world message", function () {
            request('http://localhost:7000/greeting', function (error, response, body) {
                console.log(body);
                chai_1.expect(body).to.equal("Hello World", "expected the body should contain " + body);
            });
        });
    });
});
