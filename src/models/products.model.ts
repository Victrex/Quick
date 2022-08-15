import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";
import { type } from "os";

class companys{
    @prop()
    company: string
}

export class Product {
    @prop({type:String, required:true })
    productName:string;

    @prop({type: String, required: true})
    company:string;
    
    @prop({type:String, required:true, trim: true })
    category:string;

    @prop({type:Number, default: 0 })
    price:number;

    @prop({type: String, required:true})
    description:string;

    @prop({type:String, required:true })
    photo:string;

}


const ProductModel = getModelForClass(Product);
export default ProductModel;