const express=require('express');
const app=express();
const port=8000;
app.get('/',(req,res)=>{
    res.send('this is home route');
})
app.listen(port,()=>{
    console.log(`server is listning on http://localhost:${port}`);
})