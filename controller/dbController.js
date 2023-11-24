
const model = require('../models/User')

const collection = model.model

exports.createUser = async (req, res)=>{
    res.send('hii')
      const body= req.body
    
      try{
        await collection.create(body)
        res.json()
      }
      catch(err){
        console.log('error =>',err)
      }
}

exports.getData= async (req,res)=>{
    res.send('hii')
    await collection.find({})
    .then(()=>{
           res.json()
    })
    .catch((err)=>{
          res.json({
            success:true,
            massage:err
          }) 
    })
     
}

