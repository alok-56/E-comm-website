const express = require('express');
const cors = require('cors');
const path=require("path")
const bodyparser=require('body-parser');
//require('./db/config')
require("dotenv").config();
const port = process.env.PORT || 4500;
const user = require('./db/schema/userschema')
const product = require('./db/schema/product')
const adwin = require('./db/schema/adwin');
const order=require('./db/schema/orderproduct');
const contact=require('./db/schema/contact')

const fileupload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dxlmwq61j',
  api_key: '449172957755657',
  api_secret: '_svozk1NVYoC0NWVSoV-fhR-j5c',
  secure: true
});

const mongoose=require("mongoose");

const db=process.env.DATABASE;
mongoose.connect(db).then(()=>{
    console.log("connection found")
}).catch((e)=>{
    console.log("disconnected")
})



const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(fileupload({
  useTempFiles: true
}))

//---------------user signin api---------

app.post('/signin', async (req, res) => {
  const result = new user(req.body);
  const data = await result.save();
  res.send(data)
  console.log(data)

})

//---------------user login api----------


app.post('/login', async (req, res) => {
  if (req.body.email && req.body.password) {
    const result = await user.findOne(req.body);
    res.send(result)
    console.log(result)
  }
  else {
    res.send('not found')
  }
})

//-------------get user api-------
app.get('/userlist',async(req,res)=>{
   const data=await user.find()
   res.send(data)
 
})

//-------------delete user api----------
app.delete('/deleteuser/:id',async(req,res)=>{
  const data=await user.deleteOne({_id:req.params.id});
  res.send('done')

})

//----------update user data api---

app.get('/updateuser/:id',async(req,res)=>{
  const data=await user.findOne({_id:req.params.id})
  res.send(data);
})

app.put('/updateuser/:id',async(req,res)=>{
  let result=await user.updateOne(
      {_id:req.params.id},
      {
          $set:req.body
      }
  )
  res.send(result)
})

//----------product add api -------
app.post('/product', async (req, res) => {
  const products = new product({
    name: req.body.name,
    price: req.body.price,
    discount: req.body.discount,
    catogery:req.body.catogery,
    image: req.body.image
  })
  const data = await products.save();
  res.send(data);


})

//------------product get api-----
app.get('/productlist', async (req, res) => {
  const result = await product.find(req.body)
  res.send(result)
})

//-------------single product get Api-------
app.get('/singleproduct/:id',async(req,res)=>{
  const result=await product.findOne({_id:req.params.id})
  res.send(result);

})

//------------order product post api---
app.post('/order',async(req,res)=>{
  let detail=new order(req.body);
  detail=await detail.save();
  res.send(detail)
})

//------------get order product api---
app.get('/orderconform/:id',async(req,res)=>{
  let detail=await order.findOne({_id:req.params.id})
  res.send(detail)
})

//------------user order api 
app.get('/profile/:key',async(req,res)=>{
  let detail=await order.find({
    "$or":[
      {"userId":{$regex:req.params.key}}
    ]
  })
  res.send(detail)
})

//---------------get order api------
app.get('/orderrecord',async(req,res)=>{
  let detail=await order.find(req.body);
  res.send(detail)
})

//---get single order api

app.get('/orderupdate/:id',async(req,res)=>{
  let detail=await order.findOne({_id:req.params.id})
  res.send(detail);
})

//------------orderproduct update api---
app.put('/orderupdate/:id',async(req,res)=>{
  let detail=await order.updateOne(
    {_id:req.params.id},
      {
          $set:req.body
      }

  )
  res.send(detail)

})

///------------delete order api---

app.delete('/deleteorder/:id',async(req,res)=>{
  let detail=await order.deleteOne({_id:req.params.id})
  res.send(detail)
})

//------------catogeries--search product--api---
app.get('/productcat/:key',async(req,res)=>{
  let detail=await product.find({
    "$or":[
      {"catogery":{$regex:req.params.key}}
    ]
  });
  res.send(detail);
})

//--------get product in adwin-------
app.get('/productadwin', async (req, res) => {
  const result = await product.find(req.body)
  res.send(result)
})

//----------delete product ---
app.delete('/deleteproduct/:id',async(req,res)=>{
  const result=await product.deleteOne({_id:req.params.id})
  res.send(result)
})

//------------get update product-----
app.get('/updateproduct/:id', async (req, res) => {
  const result = await product.findOne({_id:req.params.id})
  res.send(result)
})

//-----------update product list 
app.put('/updateproduct/:id',async(req,res)=>{
  let detail=await product.updateOne(
    {_id:req.params.id},
      {
          $set:req.body
      }
  )
  res.send(detail)

})

//-----------search product
app.get('/searchproduct/:key',async(req,res)=>{
  let detail=await product.find({
    "$or":[
      {name:{$regex:req.params.key}},
      {catogery:{$regex:req.params.key}},
      {price:{$regex:req.params.key}},
      {discount:{$regex:req.params.key}}
    ]
  });
  res.send(detail);
})

//----------conatct post api
app.post('/contact',async(req,res)=>{
  let result=new contact(req.body);
  result=await result.save();
  res.send(result)
})

//--------contact get api 
app.get('/contact',async(req,res)=>{
  let result=await contact.find(req.body)
  res.send(result);
})

//-------delete contact api
app.delete('/contact/:id',async(req,res)=>{
  let result=await contact.deleteOne({_id:req.params.id});
  res.send(result)
})


//------adwin login api-------
app.post('/adwin', async(req,res) => {
  const result = await adwin.findOne(req.body)
  res.send(result)
})

//---------------heruku deployment--------------

const __dirname1=path.resolve();
if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname1,"/client/build")));
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname1,"client","build","index.html"));
  })
}else{

}
app.get("/",(req,res)=>{
  res.send("app is running")
})

app.listen(port, ()=>{
  console.log("app is running");
} );