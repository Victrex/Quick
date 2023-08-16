import express, {Express, Response, Request} from "express";
import mongoose, {connect, Schema} from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import path from "path";
import adminRoutes from "./routes/admin.routes";
import clientRoutes from "./routes/clients.routes";
import methodOverride from 'method-override';
import motorRoutes from "./routes/motor.routes"
import axios from 'axios';


dotenv.config();
//configs
const app: Express = express();
const port = process.env.PORT;


app.use(cors())
app.use(express.urlencoded({extended:false}));


app.set('public', path.join(__dirname, 'public')) 
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'))





//Revisar



//routes
app.use('/admin', adminRoutes)
app.use('/', clientRoutes)
app.use('/motor', motorRoutes)

//server
app.listen(port, () =>{
    console.log(`[SERVER] running at http://localhost:${port}`);
});

//database
/* async function connectDB() {
    const db = await connect("mongodb+srv://QuickDB:8Xudeey_hA.g8U$@cluster0.gmhxjfx.mongodb.net/?retryWrites=true&w=majority");
    console.log('database is conected to', db.connection.db.databaseName);
}
connectDB(); */