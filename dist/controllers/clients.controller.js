"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexClients = exports.signup = exports.feedback = exports.index = void 0;
const path_1 = __importDefault(require("path"));
const index = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/lp_index.html'));
};
exports.index = index;
const feedback = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/lp_index/feedBack.html'));
};
exports.feedback = feedback;
const signup = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/lp_index/signUp.html'));
};
exports.signup = signup;
const indexClients = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/IndexPantallaPrinciapl.html'));
};
exports.indexClients = indexClients;
