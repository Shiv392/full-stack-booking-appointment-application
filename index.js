const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const cors=require('cors');
const sequelize=require('./util/database.js');
const User=require('./model/user.js');
const path=require('path');

const port=8000;
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

// app.use(express.static('view'));

app.get('/',(req,res)=>{
    res.send(`<h1 style="color:green;text-align:center">Your Form Has Been Submitted`)
})

app.get('/user/add-user',(req,res)=>{
   res.sendFile(path.join(__dirname,'/view/form.html'))
})

app.post('/user/add-user',async (req,res)=>{
  try{
    if(!req.body.phonenumber){
        alert('Plz Enter Your Phone Number');
        throw new Error('Phone Number is Mendotary');
    }
    const name=req.body.name;
    const email=req.body.email;
    const phonenumber=req.body.phonenumber;
    const data=await User.create({name:name,email:email,phonenumber:phonenumber});
    res.status(201).json({newuserdetails:data});
  }
  catch(err){
    res.status(500).send(err)
  }
})

app.get('/user/get-user',async (req,res)=>{
    const user=await User.findAll();
    res.status(200).json({alluser:user});
})

app.delete('/user/delete-user/:id', async (req,res)=>{
  const uid=req.params.id;
  await User.destroy({where:{id:uid}});
  res.status(200);
})

app.listen(port,()=>{
    console.log(`server is listning on http://localhost:${port}`);
})