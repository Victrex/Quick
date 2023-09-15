import mongoose, {connect, Schema} from "mongoose";
import Product from "./models/products.model";
import Client from "./models/client.model";
import Company from "./models/company.model";
import Motor from "./models/motors.model";
import Order from "./models/order.model";



export async  function addProduct(name:string, company:string, category: string, price:number, description:string, photo:string) {
    
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

export async  function addCompany(name:string, comp:string, category: string, price:number, description:string, photo:string) {
    
    const company = new Company({
        productName: `${name}`,
        company: `${comp}`,
        category: `${category}`,
        price: `${price}`,
        description: `${description}`,
        photo: `${photo}`

    })
    await company.save();

}

export async  function addClient(name: string, gender: string, telephone: number, email: string, date: string, address: string, userName: string, password: string) {
    
    const client = new Client({
    name: `${name}`,
    gender: `${gender}`,
    telephone: `${telephone}`,
    email: `${email}`,
    date: `${date}`,
    adress: `${address}`,
    userName: `${userName}`,
    password: `${password}`

    })
    await client.save();

}

export async  function addMotor(nameMotor: string,gender: String,telephone: number,status: string,photo: string,date: string,address: string,charge: string,code: string,state: string,email: string,userName: string,password: string) {
    const motor = new Motor({
        nameMotor: `${nameMotor}`,
        gender: `${gender}`,
        telephone: `${telephone}`,
        status: `${status}`,
        photo: `${photo}`,
        date: `${date}`,
        address: `${address}`,
        charge: `${charge}`,
        code: `${code}`,
        state: `${state}`,
        email: `${email}`,
        userName: `${userName}`,
        password: `${password}`

    })
    await motor.save();

}



export async function getQueries() {
    const product = await Product.find();
    console.log(product); 
} 

//getQueries();
console.log('hh');
