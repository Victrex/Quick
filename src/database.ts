import mongoose, {connect, Schema} from "mongoose";
import Product from "./models/products.model";

//conectar a la base de datos
async function connectDB() {
    const db = await connect("mongodb+srv://QuickDB:8Xudeey_hA.g8U$@cluster0.gmhxjfx.mongodb.net/?retryWrites=true&w=majority");
    console.log('database is conected to', db.connection.db.databaseName);
}
connectDB();

async function addProduct(name:string, company:string, category: string, price:number, description:string, photo:string) {
    
    const product = new Product({
        productName: `${name}`,
        company: `${company}`,
        category: `${category}`,
        price: `${price}`,
        description: `${description}`,
        photo: `${photo}`

    })
    await product.save();

}

async function getQueries() {
    const product = await Product.find();
    console.log(product); 
} 

getQueries();
console.log('hh');
