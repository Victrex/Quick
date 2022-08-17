import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";

export class clientUser{

    @prop({type:String, required:true})
    name: string;

    @prop({type:String, required:true})
    gender: string;

    @prop({type: Number, required:true})
    telephone: number;

    @prop({type:String, required:true, trim: true})
    email: string;
    
    @prop({type:String})
    date: string;

    @prop({type:String, required:true})
    address: string;

    @prop({type:String, required:true, trim: true})
    userName: string;
    @prop({type:String, required:true})
    photo: string;

    @prop({type:String, required:true})
    password: string;
}

const clientModel = getModelForClass(clientUser);
export default clientModel;
