//require("dotenv").config({path:"./env"});
import dotenv from "dotenv";

import connectDb from "./db/index.js";
dotenv.config({
    path:"./env"
});

connectDb()
.then(()=>{
app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})

})
.catch((error)=>{
console.log("Error:",error);

})







/*
import express from "express";
const app = express();

(async()=>{
    try {
      await mongoose.connect(`${process.env.MONGO_URL}`) 
      app.on("error",(error)=>{
        console.log("Error: ", error);
        throw error;
      })
      app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
      })
    } catch (error) {
      console.error("Error: ", error);  
      throw error;
    }
})() */
