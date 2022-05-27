const express = require("express")
const app = express()
const port = 3000
const mongoose = require("mongoose")
const a=require("./app")

mongoose.connect(
    'mongodb://localhost:27017/dbloginsignup',
    {
        UseNewUrlParser: true,
        useunifiedtopology: true
    }
).then(()=>{
    console.log("Database connected")
})

app.listen(port,()=>{
    console.log(`listening the port ${port}`)

})
app.use('/',a)
module.exports = app


