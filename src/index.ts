import express, {Express, Response, Request} from "express";
import mongoose, {connect, Schema} from "mongoose";
import dotenv from 'dotenv';
import adminRoutes from "./routes/admin.routes";
import path from "path";
dotenv.config();
//configs
const app: Express = express();
const port = process.env.PORT;
var publicPath = path.resolve(__dirname, './src/public');
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))


//routes
app.use('/admin', adminRoutes)





//server
app.listen(port, () =>{
    console.log(`[SERVER] running at http://localhost:${port}`);
});

//database
async function connectDB() {
    const db = await connect("mongodb+srv://QuickDB:8Xudeey_hA.g8U$@cluster0.gmhxjfx.mongodb.net/?retryWrites=true&w=majority");
    console.log('database is conected to', db.connection.db.databaseName);
}
connectDB();