import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";

export class company {
    @prop({type:String, required:true })
    companyName:string;

    @prop({type:String, required:true, trim: true })
    category:string;

    @prop({type:String, default: 0 })
    since:string;

    @prop({type: String, required:true})
    until:string;
}


const companyModel = getModelForClass(company);
export default companyModel;