"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controllers_1 = require("../controllers/admin.controllers");
const router = (0, express_1.Router)();
router.get('/', admin_controllers_1.indexAdmin);
router.get('/motoristas', admin_controllers_1.adminMotoristas);
router.get('/productos', admin_controllers_1.adminProductos);
router.get('/ordenes', admin_controllers_1.adminOrdenes);
router.get('/clientes', admin_controllers_1.adminClientes);
router.get('/empresas', admin_controllers_1.adminEmpresas);
//Router Productos
router.get('/products', admin_controllers_1.getProducts); //listo
router.get('/productos/:id', admin_controllers_1.getProduct);
router.post('/productos', admin_controllers_1.postProduct); //listo
router.put('/productos/:id', admin_controllers_1.putProduct);
router.delete('/productos/:id', admin_controllers_1.deleteProduct);
//Router Motoristas
router.get('/motoristas/get', admin_controllers_1.getMotoristas);
router.get('/motoristas/:id', admin_controllers_1.getMotorista);
router.post('/motoristas', admin_controllers_1.postMotorista);
router.put('/:id', admin_controllers_1.putMotorista);
router.delete('/motoristas/:id', admin_controllers_1.deleteMotorista);
//Router Clientes
router.get('/clientes/get', admin_controllers_1.getClients); //listo
router.get('/clientes/:id', admin_controllers_1.getClient);
router.post('/clientes', admin_controllers_1.postClient); //listo
router.put('/:id', admin_controllers_1.putClient);
router.delete('/clientes/:id', admin_controllers_1.deleteClient);
//Router Empresas
router.get('/empresas/get', admin_controllers_1.getCompanies);
router.get('/:id', admin_controllers_1.getCompany);
router.post('/company', admin_controllers_1.postCompany);
router.put('/:id', admin_controllers_1.putCompany);
router.delete('/company/:id', admin_controllers_1.deleteCompany);
//Router Ordenes
router.get('/ordenes', admin_controllers_1.getOrders);
router.get('/:id', admin_controllers_1.getOrder);
router.post('/', admin_controllers_1.postOrder);
router.put('/:id', admin_controllers_1.putOrder);
router.delete('/:id', admin_controllers_1.deleteOrder);
//Router Ordenes Disponibles
router.get('/ordenes/getDisp', admin_controllers_1.getOrdersDisp);
router.get('/ordenes/:id', admin_controllers_1.getOrderDisp);
router.post('/ordenes/postOrders', admin_controllers_1.postOrdersDisp);
router.delete('/ordenes/delOrders/:id', admin_controllers_1.deleteOrdersDisp);
exports.default = router;
