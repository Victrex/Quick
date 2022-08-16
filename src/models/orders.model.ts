import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";

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
}


const AllorderModel = getModelForClass(AllOrders);
export default AllorderModel;