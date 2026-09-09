const express=require("express")
const app=express()
const m=require("mongoose")
m.connect("mongodb://localhost:27017/csec")
.then(()=>{
    console.log("mongodb connected successfully")
})
.catch((e)=>{
    console.log(` error is ${e}`)
})
app.listen(7890,()=>{
    console.log("server is running at http://localhost:7890")
})