const express = require("express");
const app = express();
const port = process.env.port || 3000;
const users = require('./db.json');


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/TeeDat", (req,res) => {
    res.send("Hello! My name is Warawut 652021068");
});

app.get('/api/users',(req,res)=>{
    res.json(users)
});

app.get('/api/users/:id',(req,res)=>{
    res.json(users.find(user => user.id === Number(req.params.id)))
});


app.post('/api/users',(req,res)=>{
    users.push(req.body);
    let json = req.body;
    console.log(json);
    res.send("Username: " + json.username + " inserted.");
});

app.put('/api/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    const updateUser = req.body;

    const index = users.findIndex(user => user.id === userId);

    if (index !== -1) {
        users[index] = {
            id: userId,
            username: updateUser.username,
            // Add other fields to update as needed
        };
        res.send(`User with ID ${userId} has been updated.`);
    } else {
        res.status(404).send('User not found.');
    }
 });

 app.delete('/api/users/:id', (req, res) => {
    const userId = Number(req.params.id);

    const index = users.findIndex(user => user.id === userId);

    if (index !== -1) {
        users.splice(index, 1);
        res.send(`User with ID ${userId} has been deleted.`);
    } else {
        res.status(404).send('User not found.');
    }
});

app.listen(port, ()=>{
    console.log("Starting node.js at http://127.0.0.1:" + port + "/TeeDat");
    console.log("Starting node.js at http://127.0.0.1:" + port + "/api/users");
});