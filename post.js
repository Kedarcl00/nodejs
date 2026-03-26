const express=require("express");
const app= express();

app.set("view engine","ejs");

const users = [
    {name:"Kedar"},
    {name:"Abhishek"},
    {name:"Sachin"}
];

app.get("/users",(req,res)=>{
    res.render("users",{userData:users});
});

app.get("/adduser",(req,res)=>{
   const username=req.query.name;

   users.push({name:username});

   res.redirect("/users");
});

app.listen(3000,()=>{
console.log("server running on http://localhost:3000");
});