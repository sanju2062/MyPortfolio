const express = require("express")
const connectDB = require("./DB/Connection")
const app = express();
const port = process.env.PORT||5000;
const path = require("path")

const mongoose = require('mongoose');
const { Console } = require("console");


connectDB();

app.use(express.json({extended:false}));
app.use('/static',express.static('static')) 
app.use(express.urlencoded({ extended: true })) 
 
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    res.status(200).render('index') 
});

const contact ={
    Name:String,
    Contact_no:Number,
    Email:String,
    Description:String
};

const Contact = mongoose.model('Contacts',contact);



app.post('/',function(req,res){
    let newName = new Contact({
    Name:req.body.name,
    Contact_no:req.body.contact_no,
    Email:req.body.email,
    Description:req.body.desc})
    newName.save();
});

app.listen(port,()=>{
    console.log("Application is running at http://127.0.0.1:5000")
})
