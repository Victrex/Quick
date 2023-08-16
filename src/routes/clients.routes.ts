
import { Request, Response, Router } from "express";
import path from "path";
import { feedback, index, indexClients, signup } from "../controllers/clients.controller";

const router = Router();

router.get('/signin', index)
router.get('/signup', signup)
router.get('/feedback', feedback)
router.get('/', indexClients)
export default router;