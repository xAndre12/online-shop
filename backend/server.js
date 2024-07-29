const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());


mongoose.
    connect("mongodb+srv://admin:admin123@shop-online.l3jmup3.mongodb.net/?retryWrites=true&w=majority&appName=Shop-online")
    .then(()=>{
        app.listen(8000, ()=>{
            console.log("Am accesat api ul");
        })
    })
    .catch((err) => {console.log(err)})
