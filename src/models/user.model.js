import mongoose ,{Schema} from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
    {
userName:
{
    type:String,
    required:true,
    unique:true,
    index:true,
    trim:true
},
email:
    {
    
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:
    {
        type:String,
        required:[true,'password is required'],
        trim:true
    },
    fullName:
    {
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:
    {
        type:String, //url cloudinary
        required:true
    },
image:
{
    type:String, //url cloudinary
    required:true
},
watchHistory:[{
   type:Schema.Types.objectID,
   ref:"WatchHistory"
    
}],
refreshToken:
{
    type:String
}

},{
    timestamps:true 
    })

 userSchema.pre("save", async function (next) {
   if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
 })
userSchema.methods.isPasswordMatch = async function (password) {
return  await bycrypt.compare(password,this.password)
}
userSchema.methods.generateAcessToken = function () {
  return  jwt.sign(
        {
            _id:this._id,
            email:this.email,
            userName:this.userName,
            fullName:this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )}
    userSchema.methods.generateRefreshToken = function () {
        return  jwt.sign(
              {
                  _id:this._id,
                  
              },
              process.env.REFRESH_TOKEN_SECRET,
              {
                  expiresIn:process.env.REFRESH_TOKEN_EXPIRY
              }
)}
export const User=mongoose.model("User", userSchema)



