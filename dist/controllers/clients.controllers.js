"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderProduct = exports.getFarmProductos = exports.getAbaProductos = exports.getProductos = exports.getRestProductos = exports.restClient = exports.bisClient = exports.farmClient = exports.tagsClient = exports.indexClient = exports.loginClient = exports.userClient = exports.orderList = exports.index = void 0;
const path_1 = __importDefault(require("path"));
const index = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/landing.html'));
};
exports.index = index;
const orderList = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/finalList.html'));
};
exports.orderList = orderList;
const userClient = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/user.html'));
};
exports.userClient = userClient;
const loginClient = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/Ulogin.html'));
};
exports.loginClient = loginClient;
const indexClient = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cindex.html'));
};
exports.indexClient = indexClient;
const tagsClient = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/cat.html'));
};
exports.tagsClient = tagsClient;
const farmClient = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/corps.html'));
};
exports.farmClient = farmClient;
const bisClient = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/corps.html'));
};
exports.bisClient = bisClient;
const restClient = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/corps.html'));
};
exports.restClient = restClient;
const getRestProductos = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/prd.html'));
};
exports.getRestProductos = getRestProductos;
const getProductos = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/prd.html'));
};
exports.getProductos = getProductos;
const getAbaProductos = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/prd.html'));
};
exports.getAbaProductos = getAbaProductos;
const getFarmProductos = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/prd.html'));
};
exports.getFarmProductos = getFarmProductos;
const orderProduct = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/order.html'));
};
exports.orderProduct = orderProduct;
