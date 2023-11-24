const mongoose = require('mongoose')
const {Schema} = mongoose;

const User = new Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }

})

exports.model = mongoose.model('user',User)