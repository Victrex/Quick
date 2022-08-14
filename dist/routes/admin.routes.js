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
//Router Productos
router.get('/productos/', admin_controllers_1.getProducts);
router.get('/productos/:id', admin_controllers_1.getProduct);
router.post('/productos/', admin_controllers_1.postProduct);
exports.default = router;
