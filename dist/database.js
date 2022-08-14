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
const products_model_1 = __importDefault(require("./models/products.model"));
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
function getQueries() {
    return __awaiter(this, void 0, void 0, function* () {
        const product = yield products_model_1.default.find();
        console.log(product);
    });
}
getQueries();
console.log('hh');
