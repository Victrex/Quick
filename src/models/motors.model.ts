import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";

export class motorsUser{

    @prop({type:String, required:true})
    nameMotor: string;
    @prop({type: String, required: true})
    gender: String
    @prop({type: Number, required:true})
    telephone: number;
    @prop({type:String})
    status: string;
    @prop({type:String, required:true})
    photo: string;
    @prop({type:String, required:true})
    date: string;
    @prop({type:String, required:true})
    address: string;
    @prop({type:String, required:true})
    charge: string;
    @prop({type:String, required:true})
    code: string;
    @prop({type:String, required:true})
    state: string;
    @prop({type:String, required:true})
    email: string;
    @prop({type:String, required:true})
    userName: string;
    @prop({type:String, required:true})
    password: string;
}

const motorModel = getModelForClass(motorsUser);
export default motorModel;

