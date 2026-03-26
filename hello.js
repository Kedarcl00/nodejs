const express = require("express");
const app = express();
const port = 3000;

// set ejs as view engine
app.set("view engine","ejs");

// sample data
const users = [
    {name:"Kedar"},
    {name:"Abhishek"},
    {name:"Sachin"}
];

// route
app.get("/users",(req,res)=>{
    res.render("users",{userData:users});
});

app.get("/",(req,res)=>{
	res.send("this is home page ");
});

app.listen(port,()=>{
    console.log("Server running on port 3000");
});

