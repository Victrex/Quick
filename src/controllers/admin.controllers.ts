import express, {Express, Request, Response } from "express";
import path from "path";





export const indexAdmin = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname,'../public/admin-index/principal.html'));
}
export const adminMotoristas = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname,'../public/admin-index/adminmot.html'));
}

export const adminProductos = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname,'../public/admin-index/adminprod.html'));
}
export const adminOrdenes = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname,'../public/admin-index/adminord.html'));
}
export const adminClientes = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname,'../public/admin-index/admincol.html'));
}
