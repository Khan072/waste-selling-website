const moongoose=require('mongoose');
const Schema=moongoose.Schema;
const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
let pick=moongoose.model('pickup',userSchema);
module.exports=pick;