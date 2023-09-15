const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('connected to db')
    app.listen(process.env.PORT,()=>{
        console.log('server is started !');
    })
}).catch((err)=>{
    console.log(" couldn't connect to the db");
})

