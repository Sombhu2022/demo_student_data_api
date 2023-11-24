const dataCollection = require('../models/Data')
const dataModel = dataCollection.dataCollection
const express = require('express')

const app = express()

require('dotenv').config()

const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: process.env.CLOUDE_NAME ,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

exports.addData= async (req,res)=>{
       
    try {
        const myCloud = await cloudinary.uploader.upload(req.body.file, {
            folder: "upload",
            width: 300,
            crop: "scale",
        });

        const data = await dataModel.create({
            image:myCloud.secure_url,
            imageId:myCloud.public_id,
            caption:req.body.caption
        })

        res.status(200).json({
            success:true,
            message:'data added successfully.....'
        })
    }
     catch(err){
        res.status(200).json({
            success:true,
            message:'poor network connection ,check your network.....'
        })
     }

 
}

exports.getData= async (req,res)=>{
    try{

       const data = await dataModel.find({}).exec()
        
        res.json(data)
        res.send(data)
    }
    catch(err){
        console.log(err)
    }

}

exports.getDataById = async (req,res)=>{
          
     const {id} = req.params
      try{
         const data = await dataModel.findById({_id: id}).exec()
         res.json(data)
      }
      catch(err){
        res.status(400).json({
            success:false,
            message:err
        })
      }

}

exports.deleteData = async (req ,res)=>{
    const {id } = req.params
    try{

        await dataModel.findByIdAndDelete({_id:id}).exec()
        res.status(200).json({
            success:true,
            message:'data deleted'
        })
    }
    catch(err){
        res.status(400).json({
            success:false,
            message:err

    })
}

}

exports.dataUpdate = async (req , res)=>{
        
        const {id} = req.params
        const data = req.body
     try{
        await dataModel.findByIdAndUpdate({_id:id } , data , {new:true})
        res.status(200).json({
            success:true ,
            message:'data update successful'
        })
     }
     catch(err){
        res.status(400).json({
            success:false ,
            message:err
        })
     }


}