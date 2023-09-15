import express, { Express, Request, Response, Router } from "express";
import {logMotors, actualOrder, indexMotor, landingMotor, motorUser, ordersToTake, recents, staticsMotor } from "../controllers/motor.controllers";

const router: Router = Router();

router.get('/', landingMotor)
router.get('/inicio', indexMotor)
router.get('/recientes', recents)
router.get('/pedido-actual', actualOrder)
router.get('/user', motorUser)
router.get('/estadisticas', staticsMotor)
router.get('/disponibles', ordersToTake)
router.get('/login', logMotors)

export default router;