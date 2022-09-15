const express = require("express");
const app = express();
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://ujjwal:ujjwal@cluster0.hdo3ucc.mongodb.net/shop?retryWrites=true&w=majority")
.then(()=>console.log("DB Connection SuccessFull!"))
.catch((err)=>{
console.log(err)
})

app.listen(5000,()=>{
console.log("Backend Server is running!")
});