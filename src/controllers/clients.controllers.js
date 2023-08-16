"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderProduct = exports.getFarmProductos = exports.getAbaProductos = exports.getProductos = exports.getRestProductos = exports.restClient = exports.bisClient = exports.farmClient = exports.tagsClient = exports.indexClient = exports.loginClient = exports.userClient = exports.orderList = exports.index = void 0;
var path_1 = require("path");
var index = function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../public/landing.html'));
};
exports.index = index;
var orderList = function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/finalList.html'));
};
exports.orderList = orderList;
var userClient = function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/user.html'));
};
exports.userClient = userClient;
var loginClient = function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/Ulogin.html'));
};
exports.loginClient = loginClient;
var indexClient = function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cindex.html'));
};
exports.indexClient = indexClient;
var tagsClient = function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/cat.html'));
};
exports.tagsClient = tagsClient;
var farmClient = function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/corps.html'));
};
exports.farmClient = farmClient;
var bisClient = function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/corps.html'));
};
exports.bisClient = bisClient;
var restClient = function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/corps.html'));
};
exports.restClient = restClient;
var getRestProductos = function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/prd.html'));
};
exports.getRestProductos = getRestProductos;
var getProductos = function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/prd.html'));
};
exports.getProductos = getProductos;
var getAbaProductos = function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/prd.html'));
};
exports.getAbaProductos = getAbaProductos;
var getFarmProductos = function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/prd.html'));
};
exports.getFarmProductos = getFarmProductos;
var orderProduct = function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../public/cw-index/order.html'));
};
exports.orderProduct = orderProduct;
