import express, {Express, Request, Response } from "express";
import path from "path";
import ProductModel from "../models/products.model";
import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";
import { type } from "os";
import motorModel from "../models/motors.model";
import clientModel from "../models/client.model";
import companyModel from "../models/company.model";
import orderModel from "../models/order.model";
import { addProduct, getQueries } from "../database";
import { Console } from "console";

export const landingMotor = (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname,'../public/motor.html'));
}

export const indexMotor = (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname,'../public/mw-index/cat.html'));
}

export const recents = (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname,'../public/mw-index/pedrec.html'));
}
export const actualOrder = (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname,'../public/mw-index/pedtom.html'));
}
export const motorUser = (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname,'../public/mw-index/cat.html'));
}
export const staticsMotor = (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname,'../public/mw-index/statics.html'));
}
export const ordersToTake = (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname,'../public/mw-index/peddisp.html'));
}
export const logMotors = (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname,'../public/mw-index/loginmot.html'));
}