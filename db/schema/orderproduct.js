const mongoose=require('mongoose');

const orderschema=new mongoose.Schema({
    userId:String,
    useremail:String,
    usernumber:String,
    useraddress:String,
    userpincode:String,
    orderdate:String,
    deliverydate:String,
    orderstatus:String,
    productid:String,
    productimage:String,
    productname:String,
    productprice:String,
    productSized:String,
    productQuantity:String,
    productpayment:String
})

const ordermodel=mongoose.model('orderdetails',orderschema);
module.exports=ordermodel;