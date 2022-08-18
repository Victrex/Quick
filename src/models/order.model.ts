import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";

export class order {
    @prop({type:Array, required:true })
    order:[];

    @prop({type:String, required:true, trim: true })
    status:string;

    @prop({type:String, default: 0 })
    motorista: string;
}


const orderModel = getModelForClass(order);
export default orderModel;