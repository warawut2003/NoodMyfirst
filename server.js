const express = require("express");
const app = express();
const port = process.env.port || 3000;
const users = require('./db.json');

app.get("/TeeDat", (req,res) => {
    res.send("Hello! My name is Warawut 652021068");
});

app.get('/api/users',(req,res)=>{
    res.json(users)
});

app.get('/api/users/:id',(req,res)=>{
    res.json(users.find(user => user.id === Number(req.params.id)))
});

app.listen(port, ()=>{
    console.log("Starting node.js at http://127.0.0.1:" + port + "/TeeDat");
    console.log("Starting node.js at http://127.0.0.1:" + port + "/api/users");
});