require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect( process.env.MONGODB_LOCATION, {

}).then(()=>{
    console.log("connection is successful");
}).catch((e)=>{
    console.log("no connection");
})