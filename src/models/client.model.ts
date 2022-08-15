import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";

export class clientUser{

    @prop({type:String, required:true})
    name: string;

    @prop({type:String, required:true})
    gender: string;

    @prop({type: Number, required:true})
    telephone: number;

    @prop({type:String})
    email: string;
}

const clientModel = getModelForClass(clientUser);
export default clientModel;
