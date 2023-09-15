"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMotors = exports.ordersToTake = exports.staticsMotor = exports.motorUser = exports.actualOrder = exports.recents = exports.indexMotor = exports.landingMotor = void 0;
const path_1 = __importDefault(require("path"));
const landingMotor = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/motor.html'));
};
exports.landingMotor = landingMotor;
const indexMotor = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/mw-index/cat.html'));
};
exports.indexMotor = indexMotor;
const recents = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/mw-index/pedrec.html'));
};
exports.recents = recents;
const actualOrder = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/mw-index/pedtom.html'));
};
exports.actualOrder = actualOrder;
const motorUser = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/mw-index/cat.html'));
};
exports.motorUser = motorUser;
const staticsMotor = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/mw-index/statics.html'));
};
exports.staticsMotor = staticsMotor;
const ordersToTake = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/mw-index/peddisp.html'));
};
exports.ordersToTake = ordersToTake;
const logMotors = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/mw-index/loginmot.html'));
};
exports.logMotors = logMotors;
