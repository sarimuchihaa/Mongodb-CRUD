const express = require('express');
const app     = express();

const userModel = require('./usermodel')

// CRUD
// Create
app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: "Naruto",
        email: "naruto2@gmail.com",
        username: "Narutoo"
    })

    res.send(createdUser);
})


// Read
app.get('/', (req, res) => {
    res.send("Mongodb🌴");
})

app.get('/read', async (req, res) => {
    let users = await userModel.findOne({username: "Sasuke"})
    res.send(users);
})

app.get('/reads', async (req, res) => {
    let users = await userModel.find()
    res.send(users);
})


// Update
app.get('/update', async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate({name: "John Doe"}, {username: "Sasuke"}, {new: true})
    res.send(updatedUser);
})


// Delete
app.get('/delete', async (req, res) => {
    let users = await userModel.findOneAndDelete({username: "Sasuke"})
    res.send(users);
})

app.listen(3000);