const mongoose=require('mongoose');
const connectToMongo=()=>{
    mongoose.connect("mongodb://localhost:27017/KachraCart")
    .then(()=>{
        console.log("Connected successfully");
    })
    .catch(()=>{
        console.log("Error occured");
    })
}
module.exports=connectToMongo;
