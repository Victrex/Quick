"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const admin_routes_1 = __importDefault(require("./routes/admin.routes"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
//configs
const app = (0, express_1.default)();
const port = process.env.PORT;
var publicPath = path_1.default.resolve(__dirname, 'public');
app.use(express_1.default.static(publicPath));
//routes
app.use('/admin', admin_routes_1.default);
//
//server
app.listen(port, () => {
    console.log(`[SERVER] running at http://localhost:${port}`);
});
