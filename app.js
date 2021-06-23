const express = require("express")
const app = express();
const port = 80;
const path = require("path")
const fs = require("fs")

app.use('/static',express.static('static'))
app.use(express.urlencoded({ extended: true }))

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    res.status(200).render('index')
});
app.post('/',(req,res)=>{
    name =  req.body.name;
    contact_no = req.body.contact_no
    email = req.body.email
    desc = req.body.desc
    let contact_details = `\n${name}  ${contact_no}  ${email}  ${desc}`
    fs.appendFileSync('views/contact.txt',contact_details)
    let submit_message = `Thanks for contact us ${name}`
    let alert = require('alert');  
alert(submit_message)
    // alert(submit_message);
    res.status(200).render('index');
})

app.listen(port,()=>{
    console.log("Application is running at https://127.0.0.1")
})