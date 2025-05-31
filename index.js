require("dotenv").config();
const express = require("express")

const userroute = require("./Route/user.route");
const mongoose = require("mongoose");
const app = express()


mongoose.connect("mongodb://localhost:27017/User")
app.use(express.json())


app.use(userroute);
app.listen(5000, () => {
    console.log("App is running on port 5000")
});

module.exports = userroute


























































































































































// const students = [
//     {id:1, name: "sam", email: "sam@gmail.com", password:"55555"},
//     {id:2, name: "caesar", email: "caesar@gmail.com", password:"55555"},
//     {id:3, name: "fey", email: "fey@gmail.com", password:"55555"},
// ]

// app.get("/", (req, res)=>{
//     console.log(req.path)
//     return res.json(students)
// })

// app.post("/", (req, res)=>{
//     const payload = req.body;
//     const newpayload = {id:students.length+1, ...payload}
//     students.push(newpayload)
//     return res.send("User created successfully")
// })

// app.put("/", (req, res)=>{
//     const payload = req.body;
//     const userPosition = students.findIndex((students)=> students.id == payload.id)
//     students.splice(userPosition, 1, payload)
//     return res.send("Account updated successfully")
// })

// app.delete("/", (req, res)=>{
//     const payload = req.body;
//     const userPosition = students.findIndex((students)=> students.id == payload.id)
//     students.splice(userPosition, 1)
//     return res.send("User Deleted")
// })


// app.listen(5000, ()=>{
//     console.log("App is running in port 5000")
// })

