import { Request, Response } from "express";

export const indexAdmin = (req:Request, res:Response) => {
        res.send('AQUI SE VA A MOSTRAR LA PAGINA DE ADMIN');
}
export const adminMotoristas = (req:Request, res:Response) => {
    res.send('AQUI SE VA A MOSTRAR LA PAGINA DE MOTORISTAS');
}
export const adminProductos = (req:Request, res:Response) => {
    res.send('AQUI SE VA A MOSTRAR LA PAGINA DE PRODUCTOS');
}
export const adminOrdenes = (req:Request, res:Response) => {
    res.send('AQUI SE VA A MOSTRAR LA PAGINA DE ORDENES');
}
export const adminClientes = (req:Request, res:Response) => {
    /* res.send('AQUI SE VA A MOSTRAR LA PAGINA DE CLIENTES'); */
    res.render('../public/admin-index/admincol.html')
}
