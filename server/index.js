const express=require("express");
const mysql=require("mysql");
const cors=require("cors");
const PORT=process.env.PORT || 5000;
const app=express();

app.use(cors());
app.use(express.json())
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'login_react'
})

app.get("/",(req,res)=>{
    res.send("welcome to the node-express-mysql ok");
})

app.post("/upload",(req,res)=>{

    const data={
        name:req.body.name,
         email:req.body.email,
         
         image:req.body.image,
         
    
    };
    let sql="INSERT INTO `img_upload` SET ?";
    db.query(sql,data,(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
             console.log("inserted");
             res.send(result);
            // res.send()

        }
    })

})

app.listen(PORT , ()=>{
    console.log("app running");
})