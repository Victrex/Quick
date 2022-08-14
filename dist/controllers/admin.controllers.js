"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminClientes = exports.adminOrdenes = exports.adminProductos = exports.adminMotoristas = exports.indexAdmin = void 0;
const path_1 = __importDefault(require("path"));
const indexAdmin = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/admin-index/principal.html'));
};
exports.indexAdmin = indexAdmin;
const adminMotoristas = (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/admin-index/adminmot.html'));
};
exports.adminMotoristas = adminMotoristas;
const adminProductos = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/admin-index/adminprod.html'));
};
exports.adminProductos = adminProductos;
const adminOrdenes = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/admin-index/adminord.html'));
};
exports.adminOrdenes = adminOrdenes;
const adminClientes = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/admin-index/admincol.html'));
};
exports.adminClientes = adminClientes;
