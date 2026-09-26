const Joi = require("joi")
const mongoose=require("mongoose")



const bookstorSchema=new mongoose.Schema({
name:{type:String,require:true,trim:true,minlength:3,maxlength:20},
descreption:{type:String,trim:true,minlength:10,maxlength:200},
author:{type:String,require:true,minlength:5,maxlength:200,trim:true},
price:{type :Number,require:true,min:10,max:3000},


},{timestamps:true})


const validate=(booke)=>{
    const Schema=Joi.object({
        name:Joi.string().required().min(3).max(20).trim(),
        descreption:Joi.string().trim().min(10).max(200),
        // descreption:Joi.string().trim().min(10).max(200),
        author:Joi.string().required().trim().min(5).max(200),
        price:Joi.number().required().min(30).max(3000)
    })

return Schema.validate(booke)
}

const BookModul= mongoose.model("book",bookstorSchema)


module.exports={validate,BookModul}


