import { Express, Router } from "express";
import { indexAdmin, adminMotoristas, adminProductos, adminOrdenes, adminClientes, getProducts, postProduct , getProduct, putProduct, deleteProduct, getMotoristas, getMotorista, postMotorista, putMotorista, deleteMotorista, getClients, getClient, deleteClient, postClient, putClient, getCompanies, getCompany, postCompany, putCompany, deleteCompany, getOrder, deleteOrder, getOrders, postOrder, putOrder, adminEmpresas, getOrdersDisp, postOrdersDisp, deleteOrdersDisp } from "../controllers/admin.controllers";

const router = Router();
router.get('/', indexAdmin)
router.get('/motoristas', adminMotoristas);
router.get('/productos', adminProductos);
router.get('/ordenes', adminOrdenes);
router.get('/clientes', adminClientes);
router.get('/empresas', adminEmpresas);

//Router Productos
router.get('/products', getProducts); //listo
router.get('/productos/:id', getProduct); 
router.post('/productos', postProduct); //listo
router.put('/productos/:id', putProduct);
router.delete('/productos/:id', deleteProduct);

//Router Motoristas
router.get('/motoristas/get', getMotoristas);
router.get('/:id', getMotorista);
router.post('/motoristas', postMotorista);
router.put('/:id', putMotorista);
router.delete('/motoristas/:id', deleteMotorista);

//Router Clientes
router.get('/clientes/get', getClients); //listo
router.get('/:id', getClient);
router.post('/clientes', postClient); //listo
router.put('/:id', putClient);
router.delete('/clientes/:id', deleteClient);

//Router Empresas
router.get('/empresas/get', getCompanies);
router.get('/:id', getCompany);
router.post('/company', postCompany);
router.put('/:id', putCompany);
router.delete('/company/:id', deleteCompany);

//Router Ordenes
router.get('/ordenes', getOrders);
router.get('/:id', getOrder);
router.post('/', postOrder);
router.put('/:id', putOrder);
router.delete('/:id', deleteOrder);

//Router Ordenes Disponibles
router.get('/ordenes/getDisp', getOrdersDisp)
router.post('/ordenes/postOrders', postOrdersDisp)
router.delete('/ordenes/delOrders/:id', deleteOrdersDisp)



export default router;