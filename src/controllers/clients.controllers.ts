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


export const index = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname,'../public/landing.html'));
}
export const orderList = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname,'../public/cw-index/finalList.html'));
}
export const userClient = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname,'../public/cw-index/user.html'));
}

export const loginClient = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname,'../public/cw-index/Ulogin.html'));
}
export const indexClient = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname,'../public/cindex.html'));
}
export const tagsClient = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname,'../public/cw-index/cat.html'));
}
export const farmClient = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname,'../public/cw-index/corps.html'));
}
export const bisClient = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname,'../public/cw-index/corps.html'));
}
export const restClient = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname,'../public/cw-index/corps.html'));
}
export const getRestProductos = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname,'../public/cw-index/prd.html'));
}
export const getProductos = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname,'../public/cw-index/prd.html'));
}
export const getAbaProductos = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname,'../public/cw-index/prd.html'));
}
export const getFarmProductos = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname,'../public/cw-index/prd.html'));
}
export const orderProduct = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname,'../public/cw-index/order.html'));
}






