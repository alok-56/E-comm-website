const mongoose=require('mongoose');
const db="mongodb+srv://alok56:ak56@cluster0.65jpmqq.mongodb.net/apnadukan?retryWrites=true&w=majority";
mongoose.connect(db).then(()=>{
    console.log("connection found")
}).catch((e)=>{
    console.log("disconnected")
})

// mongoose.connection.on('connected',conntected=>
// console.log('connected')
// )
// mongoose.connection.on('error',error=>
// console.log('disconnected')
// )
//mongodb://localhost:27017/apna-dukan