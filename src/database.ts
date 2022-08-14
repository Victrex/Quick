import mongoose, {connect, Schema} from "mongoose";

//conectar a la base de datos
async function connectDB() {
    const db = await connect("mongodb+srv://QuickDB:8Xudeey_hA.g8U$@cluster0.gmhxjfx.mongodb.net/?retryWrites=true&w=majority");
    console.log('database is conected to', db.connection.db.databaseName);
    
    
}
connectDB();

async function getQueries() {

    const users =  "";
    console.log(users);
    
} 

getQueries();
console.log('hh');
