const express=require('express');
const app=express();
const connectToMongo=require('./db');
const User=require('./signup_model');
const Pick=require("./pickup_model");
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(express.static('public'));
connectToMongo();

app.post("/signup",async(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const user= await User.create({
        name:name,
        email:email,
        password:password
    })
    res.sendFile(__dirname+"/login.html");
})
app.post("/login",async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const user=await User.findOne({email:email})
    if(!user){
        return res.sendFile(__dirname+"/signup.html");
    }
    res.sendFile(__dirname+"/public/waste.html");
})
app.post("/pick",async(req,res)=>{
    const{name,location,productName,quantity,phoneNo}=req.body;
    const pick=await Pick.create({
        name:name,
        location:location,
        productName:productName,
        quantity:quantity,
        phoneNo:phoneNo
    })
    res.sendFile(__dirname + "/public/waste.html");


})
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/signup.html");
})

app.get("/login_form",(req,res)=>{
    res.sendFile(__dirname+"/login.html");
})
app.get("/checkrate",(req,res)=>{
    res.sendFile(__dirname+"/checkprice.html");
})
app.get("/pickup",(req,res)=>{
    res.sendFile(__dirname+"/picupform.html");
})
app.listen(3000,()=>{
    console.log("Server is running in https://localhost:3000");
})