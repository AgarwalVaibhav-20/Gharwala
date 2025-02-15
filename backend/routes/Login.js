const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/login', (req,res) =>{
    return res.redirect("login")
})

router.post('/login', async(req, res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user) return res.status(404).json({message:"User with this email does not exist."});

        if(user.password != password) return res.status(400).json({message:"Incorrect credentials"});

        return res.redirect("login");

    }catch(err){
        return res.status(500).json({message:"Internal server error"});
    }
})

module.exports = router;