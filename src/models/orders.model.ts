import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";

export class userOrder {
    @prop({type:String, required:true})
    name: string;
    @prop({type:String, required:true})
    email: string;
    @prop({type:String, required:true})
    phone: number;
    @prop({type:String, required:true})
    address: string
    
}


export class AllOrders{
    @prop({type:String, required:true}) 
    nameProduct: string;
    @prop({type:String, required:true}) 
    company: string;
    @prop({type:Number, required:true})
    quantity: number;
    @prop({type: Number, required:true})
    totalOrder: number;
    @prop({type: String, required:true})
    photo: string;
    @prop({type:String, required:true})
    userName: string;
    @prop({type:String, required:true})
    userEmail: string;
    @prop({type:Number, required:true})
    userPhone: number;
    @prop({type:String, required:true})
    userAddress: string
}


const AllorderModel = getModelForClass(AllOrders);
export default AllorderModel;