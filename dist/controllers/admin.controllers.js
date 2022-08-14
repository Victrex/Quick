"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.putProduct = exports.postProduct = exports.getProduct = exports.getProducts = exports.adminClientes = exports.adminOrdenes = exports.adminProductos = exports.adminMotoristas = exports.indexAdmin = void 0;
const path_1 = __importDefault(require("path"));
const products_model_1 = __importDefault(require("../models/products.model"));
const indexAdmin = (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../public/admin-index/principal.html'));
};
exports.indexAdmin = indexAdmin;
const adminMotoristas = (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/admin-index/adminmot.html'));
};
exports.adminMotoristas = adminMotoristas;
const adminProductos = (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/admin-index/adminprod.html'));
};
exports.adminProductos = adminProductos;
const adminOrdenes = (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/admin-index/adminord.html'));
};
exports.adminOrdenes = adminOrdenes;
const adminClientes = (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/admin-index/admincol.html'));
};
exports.adminClientes = adminClientes;
const getProducts = (req, res) => {
    products_model_1.default.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurrió al mostrar los registros"
        });
        res.end();
    });
};
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    products_model_1.default.find({ _id: req.params.id }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurrió al mostrar los registros"
        });
        res.end();
    });
};
exports.getProduct = getProduct;
const postProduct = (req, res) => {
    if (!req.body) {
        res.status(400).send({ mssage: 'Contenido no puede estar vacio' });
        return;
    }
    //new product
    const product = new products_model_1.default({
        productName: req.body.productName,
        company: req.body.company,
        category: req.body.category,
        price: req.body.price,
        description: req.body.description,
        photo: req.body.photo
    });
    product
        .save()
        .then(data => {
        res.send(data);
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurrió al crear el objeto"
        });
        res.end();
    });
};
exports.postProduct = postProduct;
const putProduct = (req, res) => {
    if (!req.body) {
        res.status(400).send({ mssage: 'Contenido no puede estar vacio' });
        return;
    }
    products_model_1.default.updateOne({ _id: req.params.id }, {
        productName: req.body.productName,
        company: req.body.company,
        category: req.body.category,
        price: req.body.price,
        description: req.body.description,
        photo: req.body.photo
    }).then(updateData => {
        res.send({ message: 'Registro actualizado', updateData });
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurrió al crear el objeto"
        });
        res.end();
    });
};
exports.putProduct = putProduct;
const deleteProduct = (req, res) => {
    products_model_1.default.remove({ _id: req.params.id }).then(removeResult => {
        res.send({ message: 'Registro eliminado', removeResult });
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurrió al mostrar los registros"
        });
        res.end();
    });
};
exports.deleteProduct = deleteProduct;
