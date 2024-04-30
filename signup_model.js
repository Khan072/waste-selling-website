const moongoose=require('mongoose');
const Schema=moongoose.Schema;
const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
let user=moongoose.model('user',userSchema);
module.exports=user;