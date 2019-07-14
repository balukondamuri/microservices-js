"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var request = require('request');
describe("Integration test suite", function () {
    describe("get tests", function () {
        it("should get hello world message", function () {
            request('http://localhost:7000/', function (error, response, body) {
                chai_1.expect(body).to.equals("Hello World");
            });
        });
    });
});
