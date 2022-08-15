import express, {Express, Request, response, Response } from "express";
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

/*CRUD Productos
 */
export const getProducts = (req:Request , res:Response) => {
        //res.sendFile(path.join(__dirname,'../public/admin-index/adminprod.html'));
        //getQueries();
        ProductModel.find().then(result=>{
                res.send(result);
                console.log(result);
                
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
                        console.log({message: 'Registro actualizado', updateData});
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
        res.send('recibido')
         /* ProductModel.remove({'_id': req.params.id}).then(removeResult=>{
                res.send({message: 'Registro eliminado', removeResult});
                res.end();      
        })
        .catch(error => {
                res.status(500).send({
                        message:error.message || "Algo ocurrió al eliminar el registro"
                });
        res.end();
        });  */
}

/*CRUD Motoristas */
export const getMotoristas = (req:Request , res:Response) => {
        motorModel.find().then(result=>{
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

export const getMotorista = (req:Request , res:Response) => {
        motorModel.find({_id: req.params.id}).then(result=>{
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

export const postMotorista = (req:Request , res:Response) => {
        if(!req.body){
                res.status(400).send({mssage: 'Contenido no puede estar vacio'});
                return;
        }

        //new motorista
        const motorista = new motorModel({
    nameMotor: req.body.nameMotor,
    gender: req.body.gender,
    telephone: req.body.telephone,
    status: req.body.status,
    photo: req.body.photo,
    date: req.body.date,
    address: req.body.address,
    charge: req.body.charge,
    code: req.body.code,
    state: req.body.state,
    email: req.body.email,
    userName: req.body.userName,
    password: req.body.password

        })
        motorista
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

export const putMotorista = (req:Request , res:Response) => {
        if(!req.body){
                res.status(400).send({mssage: 'Contenido no puede estar vacio'});
                return;
        }

        motorModel.updateOne({_id: req.params.id},{
                code:req.body.code,
                nameMotor:req.body.nameMotor,
                charge:req.body.charge,
                telephone:req.body.telephone,
                status:req.body.status

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

export const deleteMotorista = (req:Request , res:Response) => {
        motorModel.remove({_id: req.params.id}).then(removeResult=>{
                res.send({message: 'Registro eliminado', removeResult});
                res.end();      
        })
        .catch(error => {
                res.status(500).send({
                        message:error.message || "Algo ocurrió al eliminsr el registro"
                });
        res.end();
        });
}

/*CRUD Clientes/Colab */
export const getClients = (req:Request , res:Response) => {
        //res.sendFile(path.join(__dirname,'../public/admin-index/admincol.html'));
        /* clientModel.find().then(result=>{
                res.send(result);
                console.log(result)
                res.end();      
        })
        .catch(error => {
                res.status(500).send({
                        message:error.message || "Algo ocurrió al mostrar los registros"
                });
        res.end();
        }); */
        clientModel.find().then(result=>{
                res.send(result);
                console.log(result);
                
                res.end();      
        })
        .catch(error => {
                res.status(500).send({
                        message:error.message || "Algo ocurrió al mostrar los registros"
                });
        res.end();
        });
        
}

export const getClient = (req:Request , res:Response) => {
        clientModel.find({_id: req.params.id}).then(result=>{
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

export const postClient = (req:Request , res:Response) => {
        if(!req.body){
                res.status(400).send({message: 'Contenido no puede estar vacio'});
                return;
        }

        //new cliente
        const client = new clientModel({
    name: req.body.name,
    gender: req.body.gender,
    telephone: req.body.telephone,
    email: req.body.email,
    date: req.body.date,
    address: req.body.address,
    userName: req.body.userName,
    password: req.body.password


        })
        client
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

export const putClient = (req:Request , res:Response) => {
        if(!req.body){
                res.status(400).send({mssage: 'Contenido no puede estar vacio'});
                return;
        }

        clientModel.updateOne({_id: req.params.id},{
                name:req.body.name,
                charge:req.body.charge,
                telephone:req.body.telephone,
                email:req.body.email

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

export const deleteClient = (req:Request , res:Response) => {
        clientModel.remove({_id: req.params.id}).then(removeResult=>{
                res.send({message: 'Registro eliminado', removeResult});
                res.end();      
        })
        .catch(error => {
                res.status(500).send({
                        message:error.message || "Algo ocurrió al eliminar el registro"
                });
        res.end();
        });
}

/*CRUD Empresas*/
export const getCompanies = (req:Request , res:Response) => {
        companyModel.find().then(result=>{
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

export const getCompany = (req:Request , res:Response) => {
        companyModel.find({_id: req.params.id}).then(result=>{
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

export const postCompany = (req:Request , res:Response) => {
        if(!req.body){
                res.status(400).send({message: 'Contenido no puede estar vacio'});
                return;
        }

        //new empresa
        const company = new companyModel({
                companyName:req.body.companyName,
                category:req.body.category,
                since:req.body.since,
                until:req.body.until

        })
        company
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

export const putCompany = (req:Request , res:Response) => {
        if(!req.body){
                res.status(400).send({mssage: 'Contenido no puede estar vacio'});
                return;
        }

        companyModel.updateOne({_id: req.params.id},{
                companyName:req.body.companyName,
                category:req.body.category,
                since:req.body.since,
                until:req.body.until

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

export const deleteCompany = (req:Request , res:Response) => {
        companyModel.remove({_id: req.params.id}).then(removeResult=>{
                res.send({message: 'Registro eliminado', removeResult});
                res.end();      
        })
        .catch(error => {
                res.status(500).send({
                        message:error.message || "Algo ocurrió al eliminar el registro"
                });
        res.end();
        });
}

/*CRUD Ordenes*/
export const getOrders = (req:Request , res:Response) => {
        res.sendFile(path.join(__dirname,'../public/admin-index/adminord.html'));
        orderModel.find().then(result=>{
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

export const getOrder = (req:Request , res:Response) => {
        orderModel.find({_id: req.params.id}).then(result=>{
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

export const postOrder = (req:Request , res:Response) => {
        if(!req.body){
                res.status(400).send({message: 'Contenido no puede estar vacio'});
                return;
        }

        //new order
        const order = new orderModel({
                order:req.body.order,
                status:req.body.status,
                motorista:req.body.motorista

        })
        order
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

export const putOrder = (req:Request , res:Response) => {
        if(!req.body){
                res.status(400).send({mssage: 'Contenido no puede estar vacio'});
                return;
        }

        orderModel.updateOne({_id: req.params.id},{
                order:req.body.order,
                status:req.body.status,
                motorista:req.body.motorista

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

export const deleteOrder = (req:Request , res:Response) => {
        orderModel.remove({_id: req.params.id}).then(removeResult=>{
                res.send({message: 'Registro eliminado', removeResult});
                res.end();      
        })
        .catch(error => {
                res.status(500).send({
                        message:error.message || "Algo ocurrió al eliminar el registro"
                });
        res.end();
        });
}

