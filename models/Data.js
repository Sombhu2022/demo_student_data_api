const mongoose = require('mongoose')
const {Schema}=mongoose;

const dataModel = new Schema(
    {
        image:{
            type:String,
            require:true
        },
        imageId:{
            type:String

        },
        caption:{
            type:String,
            max:500,
        },
        date:{
            type:Date,
            default:Date.now
        }
    }
)

exports.dataCollection = mongoose.model('data',dataModel)