import express, {Express, Request, Response } from "express";
import path from "path";
import ProductModel from "../models/products.model";
import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";
import { type } from "os";




export const indexAdmin = (req:Request, res:Response) => {
    res.sendFile(path.resolve(__dirname,'../public/admin-index/principal.html'));
}
export const adminMotoristas = (req:Request, res:Response) => {
    res.sendFile(path.join(__dirname,'../public/admin-index/adminmot.html'));
    
    
}

export const adminProductos = (req:Request, res:Response) => {
    res.sendFile(path.join(__dirname,'../public/admin-index/adminprod.html'));
}
export const adminOrdenes = (req:Request, res:Response) => {
    res.sendFile(path.join(__dirname,'../public/admin-index/adminord.html'));
}
export const adminClientes = (req:Request, res:Response) => {
    res.sendFile(path.join(__dirname,'../public/admin-index/admincol.html'));
}

export const getProducts = (req:Request , res:Response) => {
        ProductModel.find().then(result=>{
                res.send(result);
                res.end();      
        })
        .catch(error => {
                res.status(500).send({
                        message:error.message || "Algo ocurrió al mostrar los registros"
                });
        res.end();
        });
        
}

export const getProduct = (req:Request , res:Response) => {
        ProductModel.find({_id: req.params.id}).then(result=>{
                res.send(result);
                res.end();      
        })
        .catch(error => {
                res.status(500).send({
                        message:error.message || "Algo ocurrió al mostrar los registros"
                });
        res.end();
        });
}

export const postProduct = (req:Request , res:Response) => {
        if(!req.body){
                res.status(400).send({mssage: 'Contenido no puede estar vacio'});
                return;
        }

        //new product
        const product = new ProductModel({
                productName:req.body.productName,
                company:req.body.company,
                category:req.body.category,
                price:req.body.price,
                description:req.body.description,
                photo:req.body.photo

        })
        product
                .save()
                .then(data =>{
                        res.send(data);
                        res.end();
                })
                .catch(error => {
                        res.status(500).send({
                                message:error.message || "Algo ocurrió al crear el objeto"
                        });
                res.end();
                });
        
}

export const putProduct = (req:Request , res:Response) => {
        if(!req.body){
                res.status(400).send({mssage: 'Contenido no puede estar vacio'});
                return;
        }

        ProductModel.updateOne({_id: req.params.id},{
                productName:req.body.productName,
                company:req.body.company,
                category:req.body.category,
                price:req.body.price,
                description:req.body.description,
                photo:req.body.photo

        }).then(updateData =>{
                        res.send({message: 'Registro actualizado', updateData});
                        res.end();
                })
                .catch(error => {
                        res.status(500).send({
                                message:error.message || "Algo ocurrió al crear el objeto"
                        });
                res.end();
                });
        
}

export const deleteProduct = (req:Request , res:Response) => {
        ProductModel.remove({_id: req.params.id}).then(removeResult=>{
                res.send({message: 'Registro eliminado', removeResult});
                res.end();      
        })
        .catch(error => {
                res.status(500).send({
                        message:error.message || "Algo ocurrió al mostrar los registros"
                });
        res.end();
        });
}
