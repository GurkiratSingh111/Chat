const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api',userRoutes);
app.get('/',(req,res)=>{
    res.send('backend');
})

/*
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('connected to db')
    app.listen(process.env.PORT,()=>{
        console.log('server is started !');
    })
}).catch((err)=>{
    console.log(" couldn't connect to the db");
}) */

app.listen(process.env.PORT,()=>{
    console.log('server is started !');
})

