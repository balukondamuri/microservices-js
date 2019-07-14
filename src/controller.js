"use strict";
exports.__esModule = true;
var body_parser_1 = require("body-parser");
var express_1 = require("express");
var app = express_1["default"]();
var port = 7000;
app.use(body_parser_1["default"].json());
app.get("/greeting", function (req, res) {
    res.send("Hello World");
});
app.post("/multi", function (req, res) {
    // tslint:disable-next-line:no-console
    console.log(req.body);
    var value = req.body.val1 * req.body.val2;
    res.send({ stauts: value });
});
app.listen(port, function () {
    // tslint:disable-next-line:no-console
    console.log("Application Started in " + port);
});
