const mongoose=require('mongoose');

const productschema=new mongoose.Schema({
    image:String,
    name:String,
    price:String,
    discount:String,
    catogery:String
});

const product=mongoose.model('products',productschema);
module.exports=product;