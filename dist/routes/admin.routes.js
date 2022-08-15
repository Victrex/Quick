"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controllers_1 = require("../controllers/admin.controllers");
const router = (0, express_1.Router)();
router.get('/', admin_controllers_1.indexAdmin);
//router.get('/motoristas', adminMotoristas);
router.get('/productos', admin_controllers_1.adminProductos);
//router.get('/ordenes', adminOrdenes);
//router.get('/clientes', adminClientes);
//Router Productos
router.get('/products', admin_controllers_1.getProducts);
router.get('productos/:id', admin_controllers_1.getProduct);
router.post('/productos', admin_controllers_1.postProduct);
router.put('productos/:id', admin_controllers_1.putProduct);
router.post('productos/:id', admin_controllers_1.deleteProduct);
//Router Motoristas
router.get('/motoristas', admin_controllers_1.getMotoristas);
router.get('/:id', admin_controllers_1.getMotorista);
router.post('/', admin_controllers_1.postMotorista);
router.put('/:id', admin_controllers_1.putMotorista);
router.delete('/:id', admin_controllers_1.deleteMotorista);
//Router Clientes
router.get('/clientes', admin_controllers_1.getClients);
router.get('/:id', admin_controllers_1.getClient);
router.post('/', admin_controllers_1.postClient);
router.put('/:id', admin_controllers_1.putClient);
router.delete('/:id', admin_controllers_1.deleteClient);
//Router Empresas
router.get('/empresas', admin_controllers_1.getCompanies);
router.get('/:id', admin_controllers_1.getCompany);
router.post('/', admin_controllers_1.postCompany);
router.put('/:id', admin_controllers_1.putCompany);
router.delete('/:id', admin_controllers_1.deleteCompany);
//Router Ordenes
router.get('/ordenes', admin_controllers_1.getOrders);
router.get('/:id', admin_controllers_1.getOrder);
router.post('/', admin_controllers_1.postOrder);
router.put('/:id', admin_controllers_1.putOrder);
router.delete('/:id', admin_controllers_1.deleteOrder);
exports.default = router;
