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
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const dotenv_1 = __importDefault(require("dotenv"));
const admin_routes_1 = __importDefault(require("./routes/admin.routes"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
//configs
const app = (0, express_1.default)();
const port = process.env.PORT;
var publicPath = path_1.default.resolve(__dirname, './src/public');
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
//routes
app.use('/admin', admin_routes_1.default);
//
//server
app.listen(port, () => {
    console.log(`[SERVER] running at http://localhost:${port}`);
});
//database
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, mongoose_1.connect)("mongodb+srv://QuickDB:8Xudeey_hA.g8U$@cluster0.gmhxjfx.mongodb.net/?retryWrites=true&w=majority");
        console.log('database is conected to', db.connection.db.databaseName);
    });
}
connectDB();
