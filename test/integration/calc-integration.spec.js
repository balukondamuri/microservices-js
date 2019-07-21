"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var request = require('request');
chai_1.should();
describe("Integration test suite", function () {
    describe("get tests", function () {
        it("should get hello world message", function () {
            request('http://localhost:7000/greeting', function (error, response, body) {
                chai_1.expect(body).to.equal("Hello World", "expected but the body contain " + body);
            });
        });
    });
    describe("post tests", function () {
        it("should return 6 when multiply 3 and 2", function () {
            var jsonBody = { "val1": 1, "val2": 3 };
            request.post({
                url: 'http://localhost:7000/multi',
                body: JSON.stringify({ "val1": 2, "val2": 3 }),
                headers: { 'content-type': 'application/json' }
            }, function (error, response, body) {
                var resu = JSON.parse(body);
                console.log(resu.result);
                //expect(body.status).to.equal(6, `expected 6 but the body contain ${body}`);
            });
        });
    });
});
