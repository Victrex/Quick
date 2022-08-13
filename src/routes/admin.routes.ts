import { Express, Router } from "express";
import { indexAdmin } from "../controllers/admin.controllers";

const router = Router();

router.get('/', indexAdmin);


export default router;
