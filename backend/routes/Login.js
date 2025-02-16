const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/login', (req,res) =>{
    return res.redirect("login")
})

router.post('/login', async(req, res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email , password});

        if(!user) return res.render("login" , {
            error:"Invalid Username and Password"
        });
         return res.redirect("/")
        // if(user.password != password) return res.status(400).json({message:"Incorrect credentials"});

        // return res.redirect("login");

    }catch(err){
        return res.status(500).json({message:"Internal server error"});
    }
})

module.exports = router;