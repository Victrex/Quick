"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMotors = exports.ordersToTake = exports.staticsMotor = exports.motorUser = exports.actualOrder = exports.recents = exports.indexMotor = exports.landingMotor = void 0;
var path_1 = require("path");
var landingMotor = function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../public/motor.html'));
};
exports.landingMotor = landingMotor;
var indexMotor = function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../public/mw-index/cat.html'));
};
exports.indexMotor = indexMotor;
var recents = function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../public/mw-index/pedrec.html'));
};
exports.recents = recents;
var actualOrder = function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../public/mw-index/pedtom.html'));
};
exports.actualOrder = actualOrder;
var motorUser = function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../public/mw-index/cat.html'));
};
exports.motorUser = motorUser;
var staticsMotor = function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../public/mw-index/statics.html'));
};
exports.staticsMotor = staticsMotor;
var ordersToTake = function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../public/mw-index/peddisp.html'));
};
exports.ordersToTake = ordersToTake;
var logMotors = function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../public/mw-index/loginmot.html'));
};
exports.logMotors = logMotors;
