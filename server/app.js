require("dotenv").config();
const express = require('express');
const app = express();
require("./db/connection")
const cookieParser = require("cookie-parser");


const mongoose = require("mongoose");

const Products = require("./models/productsSchema")

const DefaultData = require('./defaultData')

const cors = require("cors")
const router = require('./routes/router');



// middleware
app.use(express.json());
app.use(cookieParser(""));
app.use(cors());
app.use(router);
const port = 8005;
app.listen(port, ()=>{
    console.log(`Server is running on port number ${port}`);
})
DefaultData();