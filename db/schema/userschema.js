const mongoose =require('mongoose');

const userschema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const user=mongoose.model('users',userschema);
module.exports=user;