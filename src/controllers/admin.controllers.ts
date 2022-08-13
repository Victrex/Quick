import { Request, Response } from "express";

export const indexAdmin = (req:Request, res:Response) => {
        res.send('Servidor abierto');
}