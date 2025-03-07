import mongoose ,{Schema} from "mongoose";
//insatall mongoose aggregate package (npm i mongoose-aggregate-paginate-v2)
//install bcrypt package is convert password in hash(npm i bcrypt)
//install jsonwebtoken package  (npm i jsonwebtoken)
//install dotenv package environmental variable (npm i dotenv)
//install express package it is work on server (npm i express)
//install nodemon package it is helpful to store data  (npm i nodemon)
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema= new Schema({
    title:{
        type:String,
        required:true,      
    },
    thumbnail:{
        type:String,
        required:true,      
    },
    videoFile:
    {
        type:String,
        required:true,      
    },
    description:
    {
        type:String,
        required:true,      
    },
    duration:
    {
        type:number,
        required:true,      
    },
    views:
    {
        type:String,
        default:0,      
    },
    isPublished:
    {
        type: Boolean,
        default:true,      
    },
    owner:
    {
        type:Schema.Types.objectId,
        ref:"user"
    }
},
{
    timestamps:true
}
);
videoSchema.plugin(mongooseAggregatePaginate);
export const Video=mongoose.model("Video",videoSchema);





