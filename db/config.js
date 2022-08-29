const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/apna-dukan');

mongoose.connection.on('connected',conntected=>
console.log('connected')
)
mongoose.connection.on('error',error=>
console.log('disconnected')
)