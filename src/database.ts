import mongoose, {connect, Schema} from "mongoose";
import Product from "./models/products.model";



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
