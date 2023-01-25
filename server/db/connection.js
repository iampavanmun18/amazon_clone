const mongoose = require("mongoose");
const { DB_HOST, DB_PORT, DB_NAME } = process.env;


const DB = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

mongoose.connect(DB).then(()=>console.log("database connected")).catch((error)=> console.log("ERROR",error.message))