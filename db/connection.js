const mongoose = require('mongoose')

exports.database = async ()=>{
    const databaseUrl = 'mongodb://127.0.0.1:27017/Data'
     await mongoose.connect(databaseUrl,{


     }).then(()=>{
        console.log('database connected......')
     }).catch((err)=>{
        console.log('error',err)
     })
}