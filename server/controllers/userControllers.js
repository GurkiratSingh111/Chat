const User = require("../models/userModel");

module.exports.registerController = async (req,res,next) =>{
    try{
        const {username, email, password} = req.body;
        const user = await User.create({username,email,password});
        res.json({registerFailed:true})
    }
    catch(err){
        console.log(err);
        res.json({registerFailed:true,err});
    }
}