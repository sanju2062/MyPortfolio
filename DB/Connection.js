const mongoose = require('mongoose');

const URI = 
"mongodb+srv://SanjuDeveloper:Mausam123@sanjudeveloper.rm0ud.mongodb.net/ContactDetails?retryWrites=true&w=majority"

const connectDB = async()=>{
    await mongoose.connect(URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log("database connected..!");
};

module.exports = connectDB;