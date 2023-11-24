const express = require('express')

const app = express()
const cors = require('cors')
const {database} = require('./db/connection')
const  dataRouting = require('./router/router')
const {routing}=require('./router/data')
const bodyParser = require('body-parser')
const fileUploader = require('express-fileupload')
// connect database
database()

app.use(cors({
    origin:"http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,

}))
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(fileUploader());

app.use('',dataRouting.routing)
app.use('/data', routing)


const server = app.listen(8080 ,()=>{
     const port = server.address().port
    console.log('click this link => http://localhost:%s' ,port)
})