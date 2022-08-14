import { Express, Router } from "express";
import { indexAdmin, adminMotoristas, adminProductos, adminOrdenes, adminClientes, getProducts, postProduct , getProduct } from "../controllers/admin.controllers";

const router = Router();
router.get('/', indexAdmin)
router.get('/motoristas', adminMotoristas);
router.get('/productos', adminProductos);
router.get('/ordenes', adminOrdenes);
router.get('/clientes', adminClientes);

//Router Productos
router.get('/productos/', getProducts);
router.get('/productos/:id', getProduct);
router.post('/productos/', postProduct);


export default router;