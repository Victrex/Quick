"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminClientes = exports.adminOrdenes = exports.adminProductos = exports.adminMotoristas = exports.indexAdmin = void 0;
const indexAdmin = (req, res) => {
    res.send('AQUI SE VA A MOSTRAR LA PAGINA DE ADMIN');
};
exports.indexAdmin = indexAdmin;
const adminMotoristas = (req, res) => {
    res.send('AQUI SE VA A MOSTRAR LA PAGINA DE MOTORISTAS');
};
exports.adminMotoristas = adminMotoristas;
const adminProductos = (req, res) => {
    res.send('AQUI SE VA A MOSTRAR LA PAGINA DE PRODUCTOS');
};
exports.adminProductos = adminProductos;
const adminOrdenes = (req, res) => {
    res.send('AQUI SE VA A MOSTRAR LA PAGINA DE ORDENES');
};
exports.adminOrdenes = adminOrdenes;
const adminClientes = (req, res) => {
    /* res.send('AQUI SE VA A MOSTRAR LA PAGINA DE CLIENTES'); */
    res.render('../public/admin-index/admincol.html');
};
exports.adminClientes = adminClientes;
