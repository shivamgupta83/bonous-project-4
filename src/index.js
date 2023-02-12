const express = require('express')
const app = express()
const route = require('./router')
const mongoose = require('mongoose')
app.use(express.json())

mongoose.set("strictQuery" , false)
mongoose.connect('mongodb+srv://bhupendra_:1B97GiRnjBfdXTL4@cluster5.fjlkdvr.mongodb.net/bonusProject4',{useNewUrlParser : true})
.then(()=> {console.log("mongodb connected")})
.catch((err)=>{console.log(err)})

app.use('/', route)
app.listen(3001,()=>{
    console.log("server is started in port in 3001")
})