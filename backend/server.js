const express = require('express');
const app = express();
const mongoose = require('mongoose')
const userRoutes = require('./routes/Signup')
const PORT = 4000;
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const corsOptions={ 
//     origin: "http://localhost:5008",
//     method:"GET , POST , PUT , DELETE , PATCH , HEAD"   ,
//     credential:true 
// }
app.use(cors()) 

mongoose.connect('mongodb://127.0.0.1:27017/Gharwala').then((e)=>console.log("mongodb is connected")
).catch((err)=>console.log(err , " Mongodb is disconnected"))


app.get('/' , (req , res)=>{
    res.send("<h1>hello homies</h1>")
})

app.use('/user' , userRoutes)
app.listen(PORT , ()=>{
    console.log(`http://localhost:${PORT}`);
})