const express = require('express');
const app = express();
const mongoose = require('mongoose')
const signUpRoutes = require('./routes/Signup');
const loginRoutes = require('./routes/Login');
const verifyEmail=require('./routes/emailVerification')
const productDetails = require("./routes/ProductDeatils");
const productPrice = require('./routes/priceDetail')
const PORT = 6001;
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


mongoose.connect('mongodb://127.0.0.1:27017/commerce').then((e)=>console.log("mongodb is connected")
).catch((err)=>console.log(err ," Mongodb is disconnected"))


app.get('/' , (req , res)=>{
    res.send("<h1>hello homies</h1>")
})
app.use('/user' , signUpRoutes)
app.use('/user' , loginRoutes)
app.use('/user' , verifyEmail)
app.use('/user' , productDetails)
app.use('/productDetails' , productPrice)
app.listen(PORT , ()=>{
    console.log(`http://localhost:${PORT}`);
})



