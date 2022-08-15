import { Express, Router } from "express";
import { indexAdmin, adminMotoristas, adminProductos, adminOrdenes, adminClientes, getProducts, postProduct , getProduct, putProduct, deleteProduct, getMotoristas, getMotorista, postMotorista, putMotorista, deleteMotorista, getClients, getClient, deleteClient, postClient, putClient, getCompanies, getCompany, postCompany, putCompany, deleteCompany, getOrder, deleteOrder, getOrders, postOrder, putOrder } from "../controllers/admin.controllers";

const router = Router();
router.get('/', indexAdmin)
router.get('/motoristas', adminMotoristas);
router.get('/productos', adminProductos);
//router.get('/ordenes', adminOrdenes);
router.get('/clientes', adminClientes);

//Router Productos
router.get('/products', getProducts); //listo
router.get('productos/:id', getProduct); 
router.post('/productos', postProduct); //listo
router.put('productos/:id', putProduct);
router.post('productos/:id', deleteProduct);

//Router Motoristas
router.get('/motoristas/get', getMotoristas);
router.get('/:id', getMotorista);
router.post('/motoristas', postMotorista);
router.put('/:id', putMotorista);
router.delete('/:id', deleteMotorista);

//Router Clientes
router.get('/clientes/get', getClients); //listo
router.get('/:id', getClient);
router.post('/clientes', postClient); //listo
router.put('/:id', putClient);
router.delete('/:id', deleteClient);

//Router Empresas
router.get('/empresas', getCompanies);
router.get('/:id', getCompany);
router.post('/', postCompany);
router.put('/:id', putCompany);
router.delete('/:id', deleteCompany);

//Router Ordenes
router.get('/ordenes', getOrders);
router.get('/:id', getOrder);
router.post('/', postOrder);
router.put('/:id', putOrder);
router.delete('/:id', deleteOrder);



export default router;