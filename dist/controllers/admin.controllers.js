"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrdersDisp = exports.postOrdersDisp = exports.getOrderDisp = exports.getOrdersDisp = exports.deleteOrder = exports.putOrder = exports.postOrder = exports.getOrder = exports.getOrders = exports.deleteCompany = exports.putCompany = exports.postCompany = exports.getCompany = exports.getCompanies = exports.deleteClient = exports.putClient = exports.postClient = exports.getClientEdit = exports.getClient = exports.getClients = exports.deleteMotorista = exports.putMotorista = exports.postMotorista = exports.getMotorista = exports.getMotoristas = exports.deleteProduct = exports.putProduct = exports.postProduct = exports.getProduct = exports.getProducts = exports.adminEmpresas = exports.adminClientes = exports.adminOrdenes = exports.adminProductos = exports.adminMotoristas = exports.indexAdmin = void 0;
const path_1 = __importDefault(require("path"));
const products_model_1 = __importDefault(require("../models/products.model"));
const orders_model_1 = __importDefault(require("../models/orders.model"));
const motors_model_1 = __importDefault(require("../models/motors.model"));
const client_model_1 = __importDefault(require("../models/client.model"));
const company_model_1 = __importDefault(require("../models/company.model"));
const order_model_1 = __importDefault(require("../models/order.model"));
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
const adminEmpresas = (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/admin-index/admincomp.html'));
};
exports.adminEmpresas = adminEmpresas;
/*CRUD Productos
 */
const getProducts = (req, res) => {
    //res.sendFile(path.join(__dirname,'../public/admin-index/adminprod.html'));
    //getQueries();
    products_model_1.default.find().then(result => {
        res.send(result);
        console.log(result);
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al mostrar los registros"
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
            message: error.message || "Algo ocurri?? al mostrar los registros"
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
        res.redirect('/admin/productos');
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al crear el objeto"
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
        console.log({ message: 'Registro actualizado', updateData });
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al crear el objeto"
        });
        res.end();
    });
};
exports.putProduct = putProduct;
const deleteProduct = (req, res) => {
    //res.send('recibido')
    products_model_1.default.findByIdAndRemove({ '_id': req.params.id }).then(removeResult => {
        res.send({ message: 'Registro eliminado', removeResult });
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al eliminar el registro"
        });
        res.end();
    });
};
exports.deleteProduct = deleteProduct;
/*CRUD Motoristas */
const getMotoristas = (req, res) => {
    motors_model_1.default.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al mostrar los registros"
        });
        res.end();
    });
};
exports.getMotoristas = getMotoristas;
const getMotorista = (req, res) => {
    motors_model_1.default.findOne({ email: req.params.id }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al mostrar los registros"
        });
        res.end();
    });
};
exports.getMotorista = getMotorista;
const postMotorista = (req, res) => {
    if (!req.body) {
        res.status(400).send({ mssage: 'Contenido no puede estar vacio' });
        return;
    }
    //new motorista
    const motorista = new motors_model_1.default({
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
        .then(data => {
        res.redirect('/admin/motoristas');
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al crear el objeto"
        });
        res.end();
    });
};
exports.postMotorista = postMotorista;
const putMotorista = (req, res) => {
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
    }).then(updateData => {
        res.send({ message: 'Registro actualizado', updateData });
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al crear el objeto"
        });
        res.end();
    });
};
exports.putMotorista = putMotorista;
const deleteMotorista = (req, res) => {
    motors_model_1.default.remove({ _id: req.params.id }).then(removeResult => {
        res.send({ message: 'Registro eliminado', removeResult });
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al eliminsr el registro"
        });
        res.end();
    });
};
exports.deleteMotorista = deleteMotorista;
/*CRUD Clientes/Colab */
const getClients = (req, res) => {
    client_model_1.default.find().then(result => {
        res.send(result);
        console.log(result);
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al mostrar los registros"
        });
        res.end();
    });
};
exports.getClients = getClients;
const getClient = (req, res) => {
    client_model_1.default.findOne({ email: req.params.id }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al mostrar los registros"
        });
        res.end();
    });
};
exports.getClient = getClient;
const getClientEdit = (req, res) => {
    client_model_1.default.findOne({ _id: req.params.id }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al mostrar los registros"
        });
        res.end();
    });
};
exports.getClientEdit = getClientEdit;
const postClient = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'Contenido no puede estar vacio' });
        return;
    }
    //new cliente
    const client = new client_model_1.default({
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
        .then(data => {
        res.redirect('/admin/clientes');
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al crear el objeto"
        });
        res.end();
    });
};
exports.postClient = postClient;
const putClient = (req, res) => {
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
    }).then(updateData => {
        res.send({ message: 'Registro actualizado', updateData });
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al crear el objeto"
        });
        res.end();
    });
};
exports.putClient = putClient;
const deleteClient = (req, res) => {
    client_model_1.default.remove({ _id: req.params.id }).then(removeResult => {
        res.send({ message: 'Registro eliminado', removeResult });
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al eliminar el registro"
        });
        res.end();
    });
};
exports.deleteClient = deleteClient;
/*CRUD Empresas*/
const getCompanies = (req, res) => {
    company_model_1.default.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al mostrar los registros"
        });
        res.end();
    });
};
exports.getCompanies = getCompanies;
const getCompany = (req, res) => {
    company_model_1.default.find({ _id: req.params.id }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al mostrar los registros"
        });
        res.end();
    });
};
exports.getCompany = getCompany;
const postCompany = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'Contenido no puede estar vacio' });
        return;
    }
    //new empresa
    const company = new company_model_1.default({
        companyName: req.body.companyName,
        category: req.body.category,
        since: req.body.since,
        until: req.body.until,
        photo: req.body.photo
    });
    company
        .save()
        .then(data => {
        res.redirect('/admin/empresas');
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al crear el objeto"
        });
        res.end();
    });
};
exports.postCompany = postCompany;
const putCompany = (req, res) => {
    if (!req.body) {
        res.status(400).send({ mssage: 'Contenido no puede estar vacio' });
        return;
    }
    company_model_1.default.updateOne({ _id: req.params.id }, {
        companyName: req.body.companyName,
        category: req.body.category,
        since: req.body.since,
        until: req.body.until
    }).then(updateData => {
        res.send({ message: 'Registro actualizado', updateData });
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al crear el objeto"
        });
        res.end();
    });
};
exports.putCompany = putCompany;
const deleteCompany = (req, res) => {
    company_model_1.default.remove({ _id: req.params.id }).then(removeResult => {
        res.send({ message: 'Registro eliminado', removeResult });
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al eliminar el registro"
        });
        res.end();
    });
};
exports.deleteCompany = deleteCompany;
/*CRUD Ordenes*/
const getOrders = (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/admin-index/adminord.html'));
    order_model_1.default.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al mostrar los registros"
        });
        res.end();
    });
};
exports.getOrders = getOrders;
const getOrder = (req, res) => {
    order_model_1.default.find({ _id: req.params.id }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al mostrar los registros"
        });
        res.end();
    });
};
exports.getOrder = getOrder;
const postOrder = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'Contenido no puede estar vacio' });
        return;
    }
    //new order
    const order = new order_model_1.default({
        order: req.body.order,
        status: req.body.status,
        motorista: req.body.motorista
    });
    order
        .save()
        .then(data => {
        res.send(data);
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al crear el objeto"
        });
        res.end();
    });
};
exports.postOrder = postOrder;
const putOrder = (req, res) => {
    if (!req.body) {
        res.status(400).send({ mssage: 'Contenido no puede estar vacio' });
        return;
    }
    order_model_1.default.updateOne({ _id: req.params.id }, {
        order: req.body.order,
        status: req.body.status,
        motorista: req.body.motorista
    }).then(updateData => {
        res.send({ message: 'Registro actualizado', updateData });
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al crear el objeto"
        });
        res.end();
    });
};
exports.putOrder = putOrder;
const deleteOrder = (req, res) => {
    order_model_1.default.remove({ _id: req.params.id }).then(removeResult => {
        res.send({ message: 'Registro eliminado', removeResult });
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al eliminar el registro"
        });
        res.end();
    });
};
exports.deleteOrder = deleteOrder;
const getOrdersDisp = (req, res) => {
    orders_model_1.default.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al mostrar los registros"
        });
        res.end();
    });
};
exports.getOrdersDisp = getOrdersDisp;
const getOrderDisp = (req, res) => {
    orders_model_1.default.findById({ _id: req.params.id }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al mostrar los registros"
        });
        res.end();
    });
};
exports.getOrderDisp = getOrderDisp;
const postOrdersDisp = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'Contenido no puede estar vacio' });
        return;
    }
    //new order
    const order = new orders_model_1.default({
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
        .then(data => {
        res.send(data);
        res.end();
    })
        .catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al crear el objeto"
        });
        res.end();
    });
};
exports.postOrdersDisp = postOrdersDisp;
const deleteOrdersDisp = (req, res) => {
    orders_model_1.default.remove({ _id: req.params.id }).then(removeResult => {
        res.send({ message: 'Registro eliminado', removeResult });
        res.end();
    }).catch(error => {
        res.status(500).send({
            message: error.message || "Algo ocurri?? al eliminar el registro"
        });
        res.end();
    });
};
exports.deleteOrdersDisp = deleteOrdersDisp;
