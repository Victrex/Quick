import { Express, Router } from "express";
import { indexAdmin, adminMotoristas, adminProductos, adminOrdenes, adminClientes } from "../controllers/admin.controllers";

const router = Router();
router.get('/', indexAdmin)
router.get('/motoristas', adminMotoristas);
router.get('/productos', adminProductos);
router.get('/ordenes', adminOrdenes);
router.get('/clientes', adminClientes);


export default router;