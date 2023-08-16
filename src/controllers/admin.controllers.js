"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrdersDisp = exports.postOrdersDisp = exports.getOrderDisp = exports.getOrdersDisp = exports.deleteOrder = exports.putOrder = exports.postOrder = exports.getOrder = exports.getOrders = exports.deleteCompany = exports.putCompany = exports.postCompany = exports.getCompany = exports.getCompanies = exports.deleteClient = exports.putClient = exports.postClient = exports.getClientEdit = exports.getClient = exports.getClients = exports.deleteMotorista = exports.putMotorista = exports.postMotorista = exports.getMotorista = exports.getMotoristas = exports.deleteProduct = exports.putProduct = exports.postProduct = exports.getProduct = exports.getProducts = exports.adminEmpresas = exports.adminClientes = exports.adminOrdenes = exports.adminProductos = exports.adminMotoristas = exports.indexAdmin = void 0;
var path_1 = require("path");
var products_model_1 = require("../models/products.model");
var orders_model_1 = require("../models/orders.model");
var motors_model_1 = require("../models/motors.model");
var client_model_1 = require("../models/client.model");
var company_model_1 = require("../models/company.model");
var order_model_1 = require("../models/order.model");
var indexAdmin = function (req, res) {
    res.sendFile(path_1.default.resolve(__dirname, '../public/admin-index/principal.html'));
};
exports.indexAdmin = indexAdmin;
var adminMotoristas = function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../public/admin-index/adminmot.html'));
};
exports.adminMotoristas = adminMotoristas;
var adminProductos = function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../public/admin-index/adminprod.html'));
};
exports.adminProductos = adminProductos;
var adminOrdenes = function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../public/admin-index/adminord.html'));
};
exports.adminOrdenes = adminOrdenes;
var adminClientes = function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../public/admin-index/admincol.html'));
};
exports.adminClientes = adminClientes;
var adminEmpresas = function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../public/admin-index/admincomp.html'));
};
exports.adminEmpresas = adminEmpresas;
/*CRUD Productos
 */
var getProducts = function (req, res) {
    //res.sendFile(path.join(__dirname,'../public/admin-index/adminprod.html'));
    //getQueries();
    products_model_1.default.find().then(function (result) {
        res.send(result);
        console.log(result);
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al mostrar los registros"
        });
        res.end();
    });
};
exports.getProducts = getProducts;
var getProduct = function (req, res) {
    products_model_1.default.find({ _id: req.params.id }).then(function (result) {
        res.send(result);
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al mostrar los registros"
        });
        res.end();
    });
};
exports.getProduct = getProduct;
var postProduct = function (req, res) {
    if (!req.body) {
        res.status(400).send({ mssage: 'Contenido no puede estar vacio' });
        return;
    }
    //new product
    var product = new products_model_1.default({
        productName: req.body.productName,
        company: req.body.company,
        category: req.body.category,
        price: req.body.price,
        description: req.body.description,
        photo: req.body.photo
    });
    product
        .save()
        .then(function (data) {
        res.redirect('/admin/productos');
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al crear el objeto"
        });
        res.end();
    });
};
exports.postProduct = postProduct;
var putProduct = function (req, res) {
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
    }).then(function (updateData) {
        console.log({ message: 'Registro actualizado', updateData: updateData });
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al crear el objeto"
        });
        res.end();
    });
};
exports.putProduct = putProduct;
var deleteProduct = function (req, res) {
    //res.send('recibido')
    products_model_1.default.findByIdAndRemove({ '_id': req.params.id }).then(function (removeResult) {
        res.send({ message: 'Registro eliminado', removeResult: removeResult });
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al eliminar el registro"
        });
        res.end();
    });
};
exports.deleteProduct = deleteProduct;
/*CRUD Motoristas */
var getMotoristas = function (req, res) {
    motors_model_1.default.find().then(function (result) {
        res.send(result);
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al mostrar los registros"
        });
        res.end();
    });
};
exports.getMotoristas = getMotoristas;
var getMotorista = function (req, res) {
    motors_model_1.default.findOne({ email: req.params.id }).then(function (result) {
        res.send(result);
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al mostrar los registros"
        });
        res.end();
    });
};
exports.getMotorista = getMotorista;
var postMotorista = function (req, res) {
    if (!req.body) {
        res.status(400).send({ mssage: 'Contenido no puede estar vacio' });
        return;
    }
    //new motorista
    var motorista = new motors_model_1.default({
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
    });
    motorista
        .save()
        .then(function (data) {
        res.redirect('/admin/motoristas');
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al crear el objeto"
        });
        res.end();
    });
};
exports.postMotorista = postMotorista;
var putMotorista = function (req, res) {
    if (!req.body) {
        res.status(400).send({ mssage: 'Contenido no puede estar vacio' });
        return;
    }
    motors_model_1.default.updateOne({ _id: req.params.id }, {
        code: req.body.code,
        nameMotor: req.body.nameMotor,
        charge: req.body.charge,
        telephone: req.body.telephone,
        status: req.body.status
    }).then(function (updateData) {
        res.send({ message: 'Registro actualizado', updateData: updateData });
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al crear el objeto"
        });
        res.end();
    });
};
exports.putMotorista = putMotorista;
var deleteMotorista = function (req, res) {
    motors_model_1.default.remove({ _id: req.params.id }).then(function (removeResult) {
        res.send({ message: 'Registro eliminado', removeResult: removeResult });
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al eliminsr el registro"
        });
        res.end();
    });
};
exports.deleteMotorista = deleteMotorista;
/*CRUD Clientes/Colab */
var getClients = function (req, res) {
    client_model_1.default.find().then(function (result) {
        res.send(result);
        console.log(result);
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al mostrar los registros"
        });
        res.end();
    });
};
exports.getClients = getClients;
var getClient = function (req, res) {
    client_model_1.default.findOne({ email: req.params.id }).then(function (result) {
        res.send(result);
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al mostrar los registros"
        });
        res.end();
    });
};
exports.getClient = getClient;
var getClientEdit = function (req, res) {
    client_model_1.default.findOne({ _id: req.params.id }).then(function (result) {
        res.send(result);
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al mostrar los registros"
        });
        res.end();
    });
};
exports.getClientEdit = getClientEdit;
var postClient = function (req, res) {
    if (!req.body) {
        res.status(400).send({ message: 'Contenido no puede estar vacio' });
        return;
    }
    //new cliente
    var client = new client_model_1.default({
        name: req.body.name,
        gender: req.body.gender,
        telephone: req.body.telephone,
        email: req.body.email,
        date: req.body.date,
        address: req.body.address,
        userName: req.body.userName,
        password: req.body.password,
        photo: req.body.photo
    });
    client
        .save()
        .then(function (data) {
        res.redirect('/admin/clientes');
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al crear el objeto"
        });
        res.end();
    });
};
exports.postClient = postClient;
var putClient = function (req, res) {
    if (!req.body) {
        res.status(400).send({ mssage: 'Contenido no puede estar vacio' });
        return;
    }
    client_model_1.default.updateOne({ _id: req.params.id }, {
        name: req.body.name,
        gender: req.body.gender,
        telephone: req.body.telephone,
        email: req.body.email,
        date: req.body.date,
        address: req.body.address,
        userName: req.body.userName,
        password: req.body.password,
        photo: req.body.photo
    }).then(function (updateData) {
        res.send({ message: 'Registro actualizado', updateData: updateData });
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al crear el objeto"
        });
        res.end();
    });
};
exports.putClient = putClient;
var deleteClient = function (req, res) {
    client_model_1.default.remove({ _id: req.params.id }).then(function (removeResult) {
        res.send({ message: 'Registro eliminado', removeResult: removeResult });
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al eliminar el registro"
        });
        res.end();
    });
};
exports.deleteClient = deleteClient;
/*CRUD Empresas*/
var getCompanies = function (req, res) {
    company_model_1.default.find().then(function (result) {
        res.send(result);
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al mostrar los registros"
        });
        res.end();
    });
};
exports.getCompanies = getCompanies;
var getCompany = function (req, res) {
    company_model_1.default.find({ _id: req.params.id }).then(function (result) {
        res.send(result);
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al mostrar los registros"
        });
        res.end();
    });
};
exports.getCompany = getCompany;
var postCompany = function (req, res) {
    if (!req.body) {
        res.status(400).send({ message: 'Contenido no puede estar vacio' });
        return;
    }
    //new empresa
    var company = new company_model_1.default({
        companyName: req.body.companyName,
        category: req.body.category,
        since: req.body.since,
        until: req.body.until,
        photo: req.body.photo
    });
    company
        .save()
        .then(function (data) {
        res.redirect('/admin/empresas');
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al crear el objeto"
        });
        res.end();
    });
};
exports.postCompany = postCompany;
var putCompany = function (req, res) {
    if (!req.body) {
        res.status(400).send({ mssage: 'Contenido no puede estar vacio' });
        return;
    }
    company_model_1.default.updateOne({ _id: req.params.id }, {
        companyName: req.body.companyName,
        category: req.body.category,
        since: req.body.since,
        until: req.body.until
    }).then(function (updateData) {
        res.send({ message: 'Registro actualizado', updateData: updateData });
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al crear el objeto"
        });
        res.end();
    });
};
exports.putCompany = putCompany;
var deleteCompany = function (req, res) {
    company_model_1.default.remove({ _id: req.params.id }).then(function (removeResult) {
        res.send({ message: 'Registro eliminado', removeResult: removeResult });
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al eliminar el registro"
        });
        res.end();
    });
};
exports.deleteCompany = deleteCompany;
/*CRUD Ordenes*/
var getOrders = function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../public/admin-index/adminord.html'));
    order_model_1.default.find().then(function (result) {
        res.send(result);
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al mostrar los registros"
        });
        res.end();
    });
};
exports.getOrders = getOrders;
var getOrder = function (req, res) {
    order_model_1.default.find({ _id: req.params.id }).then(function (result) {
        res.send(result);
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al mostrar los registros"
        });
        res.end();
    });
};
exports.getOrder = getOrder;
var postOrder = function (req, res) {
    if (!req.body) {
        res.status(400).send({ message: 'Contenido no puede estar vacio' });
        return;
    }
    //new order
    var order = new order_model_1.default({
        order: req.body.order,
        status: req.body.status,
        motorista: req.body.motorista
    });
    order
        .save()
        .then(function (data) {
        res.send(data);
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al crear el objeto"
        });
        res.end();
    });
};
exports.postOrder = postOrder;
var putOrder = function (req, res) {
    if (!req.body) {
        res.status(400).send({ mssage: 'Contenido no puede estar vacio' });
        return;
    }
    order_model_1.default.updateOne({ _id: req.params.id }, {
        order: req.body.order,
        status: req.body.status,
        motorista: req.body.motorista
    }).then(function (updateData) {
        res.send({ message: 'Registro actualizado', updateData: updateData });
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al crear el objeto"
        });
        res.end();
    });
};
exports.putOrder = putOrder;
var deleteOrder = function (req, res) {
    order_model_1.default.remove({ _id: req.params.id }).then(function (removeResult) {
        res.send({ message: 'Registro eliminado', removeResult: removeResult });
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al eliminar el registro"
        });
        res.end();
    });
};
exports.deleteOrder = deleteOrder;
var getOrdersDisp = function (req, res) {
    orders_model_1.default.find().then(function (result) {
        res.send(result);
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al mostrar los registros"
        });
        res.end();
    });
};
exports.getOrdersDisp = getOrdersDisp;
var getOrderDisp = function (req, res) {
    orders_model_1.default.findById({ _id: req.params.id }).then(function (result) {
        res.send(result);
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al mostrar los registros"
        });
        res.end();
    });
};
exports.getOrderDisp = getOrderDisp;
var postOrdersDisp = function (req, res) {
    if (!req.body) {
        res.status(400).send({ message: 'Contenido no puede estar vacio' });
        return;
    }
    //new order
    var order = new orders_model_1.default({
        nameProduct: req.body.nameProduct,
        company: req.body.company,
        quantity: req.body.quantity,
        totalOrder: req.body.totalOrder,
        photo: req.body.photo,
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        userPhone: req.body.userPhone,
        userAddress: req.body.userAddress
    });
    order
        .save()
        .then(function (data) {
        res.send(data);
        res.end();
    })
        .catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al crear el objeto"
        });
        res.end();
    });
};
exports.postOrdersDisp = postOrdersDisp;
var deleteOrdersDisp = function (req, res) {
    orders_model_1.default.remove({ _id: req.params.id }).then(function (removeResult) {
        res.send({ message: 'Registro eliminado', removeResult: removeResult });
        res.end();
    }).catch(function (error) {
        res.status(500).send({
            message: error.message || "Algo ocurrió al eliminar el registro"
        });
        res.end();
    });
};
exports.deleteOrdersDisp = deleteOrdersDisp;
