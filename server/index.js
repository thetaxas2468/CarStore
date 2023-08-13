const express = require("express");
require("dotenv").config();
var cors = require("cors");
const mongoose=require("mongoose")
const app = express();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/authRoute");
const {MONGO_URL,SERVER_PORT,DB_NAME} = require("./constants");



app.use(cors({
  origin:["http://localhost:3000"],
  methods:["GET","POST"],
  credentials:true
}));
app.use(express.json());
app.use(cookieParser());

app.get("/",(req,res)=>{
    return res.json({wow:"asdasd"})
})

app.use("/api/auth",authRoute);


app.use((req,res)=>{
    res.status(404)
    return res.json({error:"Path is not found!"})
})


mongoose
  .connect(MONGO_URL, {dbName:DB_NAME ,useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
      
    console.log("connected to mongoDB!")
    app.listen(SERVER_PORT,()=>{
      console.log("Server connected")
  })})
  .catch(() => console.log("failed to connect to mongoDB."));