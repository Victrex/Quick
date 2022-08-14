import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";

export class motorsUser{

    @prop({type:Number, required:true})
    code: number;

    @prop({type:String, required:true})
    nameMotor: string;

    @prop({type: String, required: true})
    charge: String

    @prop({type: Number, required:true})
    telephone: number;

    @prop({type:String})
    state: string;
}
