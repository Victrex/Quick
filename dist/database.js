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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//conectar a la base de datos
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, mongoose_1.connect)("mongodb+srv://QuickDB:8Xudeey_hA.g8U$@cluster0.gmhxjfx.mongodb.net/?retryWrites=true&w=majority");
        console.log('database is conected to', db.connection.db.databaseName);
    });
}
connectDB();
function getQueries() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = "";
        console.log(users);
    });
}
getQueries();
console.log('hh');
