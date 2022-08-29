const mongoose=require('mongoose');

const conatctschema=new mongoose.Schema({
    userId:String,
    userName:String,
    userEmail:String,
    message:String
});
const contact=mongoose.model('contacts',conatctschema);
module.exports=contact;