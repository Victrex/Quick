import express, { Express, Request, Response, response } from "express";
import path from "path";

export const index = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname, '../public/lp_index.html'));
};

export const feedback = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname, '../public/lp_index/feedBack.html'));
}

export const signup = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname, '../public/lp_index/signUp.html'));
}

export const indexClients = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname, '../public/IndexPantallaPrinciapl.html'));
}