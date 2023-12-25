require("dotenv").config()
const mongoose = require("mongoose")
const express = require("express");
const app = express();
const path = require('path');

const listRoutes = require("./routes/lists")

const url = process.env.MONGO_URL

mongoose.connect(url).then(()=>{
    "connected";
})
app.use(express.json());



app.use(listRoutes);



app.listen(process.env.PORT ,()=>{
    console.log("here");
});
 