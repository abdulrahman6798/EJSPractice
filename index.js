

const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));



app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/rolldice",(req,res)=>{
    let val = Math.floor(Math.random()*6) +1;
    res.render("rolldice.ejs",{num : val});
})

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(instaData);

   if(data){
     res.render("ig.ejs",{data});
   } else{
    res.render("error.ejs");
   }
})

app.listen(port,()=>{
    console.log("App is listening on port 8080");
});

