"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueries = exports.addMotor = exports.addClient = exports.addCompany = exports.addProduct = void 0;
const products_model_1 = __importDefault(require("./models/products.model"));
const client_model_1 = __importDefault(require("./models/client.model"));
const company_model_1 = __importDefault(require("./models/company.model"));
const motors_model_1 = __importDefault(require("./models/motors.model"));
function addProduct(name, company, category, price, description, photo) {
    return __awaiter(this, void 0, void 0, function* () {
        const product = new products_model_1.default({
            productName: `${name}`,
            company: `${company}`,
            category: `${category}`,
            price: `${price}`,
            description: `${description}`,
            photo: `${photo}`
        });
        yield product.save();
    });
}
exports.addProduct = addProduct;
function addCompany(name, comp, category, price, description, photo) {
    return __awaiter(this, void 0, void 0, function* () {
        const company = new company_model_1.default({
            productName: `${name}`,
            company: `${comp}`,
            category: `${category}`,
            price: `${price}`,
            description: `${description}`,
            photo: `${photo}`
        });
        yield company.save();
    });
}
exports.addCompany = addCompany;
function addClient(name, gender, telephone, email, date, address, userName, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new client_model_1.default({
            name: `${name}`,
            gender: `${gender}`,
            telephone: `${telephone}`,
            email: `${email}`,
            date: `${date}`,
            adress: `${address}`,
            userName: `${userName}`,
            password: `${password}`
        });
        yield client.save();
    });
}
exports.addClient = addClient;
function addMotor(nameMotor, gender, telephone, status, photo, date, address, charge, code, state, email, userName, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const motor = new motors_model_1.default({
            nameMotor: `${nameMotor}`,
            gender: `${gender}`,
            telephone: `${telephone}`,
            status: `${status}`,
            photo: `${photo}`,
            date: `${date}`,
            address: `${address}`,
            charge: `${charge}`,
            code: `${code}`,
            state: `${state}`,
            email: `${email}`,
            userName: `${userName}`,
            password: `${password}`
        });
        yield motor.save();
    });
}
exports.addMotor = addMotor;
function getQueries() {
    return __awaiter(this, void 0, void 0, function* () {
        const product = yield products_model_1.default.find();
        console.log(product);
    });
}
exports.getQueries = getQueries;
//getQueries();
console.log('hh');
