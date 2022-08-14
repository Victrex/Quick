import express, {Express, Response, Request} from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import adminRoutes from "./routes/admin.routes";
dotenv.config();
//configs
const app: Express = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));



//routes
app.use('/admin', adminRoutes)



//server
app.listen(port, () =>{
    console.log(`[SERVER] running at http://localhost:${port}`);
});
