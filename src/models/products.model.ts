import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";
import { type } from "os";

class companys{
    @prop()
    company: string
}

class Product {
    @prop({type:String, required:true, trim: true })
    productName:string;

    @prop({type: () => [companys]})
    company:companys;
    
    @prop({type:String, required:true, trim: true })
    category:string;

    @prop({type:Number, default: 0 })
    price:number;

    @prop({type: String, required:true})
    description:string;

    @prop({type:String, required:true })
    photo:string;

}