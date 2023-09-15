
import { Router } from "express";
import { orderList, index, bisClient, farmClient, indexClient, loginClient, restClient, tagsClient, getAbaProductos, getRestProductos, orderProduct, getFarmProductos, userClient, getProductos } from "../controllers/clients.controllers";

const router = Router();

router.get('/', index)
router.get('/login', loginClient)
router.get('/quick', indexClient)
router.get('/client/categorias', tagsClient)
router.get('/client/farmacias', farmClient)
router.get('/client/restaurantes', restClient)
router.get('/client/Abarrotes', bisClient)
router.get('/farmacias/productos', getRestProductos)
router.get('/client/productos', getProductos)
router.get('/abarrotes/productos', getAbaProductos)
router.get('/farmacias/productos', getFarmProductos)
router.get('/client/order', orderProduct)
router.get('/client/orderlist', orderList)
router.get('/client/user', userClient)

export default router;