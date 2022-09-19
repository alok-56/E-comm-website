const mongoose=require('mongoose');

const adwinschema=new mongoose.Schema({
    email:String,
    password:String
});
const adwin=mongoose.model('adwins',adwinschema);
module.exports=adwin;