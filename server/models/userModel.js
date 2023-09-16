const mongoose = require("mongoose");
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "you need a username !"],
        unique: true,
        min:3,
    },
    email:{
        type: String,
        required: [true, "you need an email"],
        unique: true,
        min:3,
        validate: [isEmail,"Please enter a valid email"]
    },
    password:{
        type: String,
        required: true,
        min: 4
    }
});

userSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next();
})

const User = mongoose.model('user',userSchema);

module.exports = User;