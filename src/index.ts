import express, {Express, Response, Request} from "express";
import dotenv from 'dotenv';
import adminRoutes from "./routes/admin.routes";
import path from "path";
dotenv.config();
//configs
const app: Express = express();
const port = process.env.PORT;
var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath))


//routes
app.use('/admin', adminRoutes)



//

//server
app.listen(port, () =>{
    console.log(`[SERVER] running at http://localhost:${port}`);
});
