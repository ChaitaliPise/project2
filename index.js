//console.log("hi");
const db = require("monk")("127.0.0.1:27017/emp")
const express = require("express");
// console.log(typeof express);
const app = express()
// console.log(app);
// creating routes in node js appli using express
app.get("/register", (req, res) => {
   // res.end("register page")
   res.render("register.ejs")
})
app.get("/login", (req, res) => {
 //   res.end("login page")np
 res.render("login.ejs")
})
app.get("/home", (req, res) => {
  //  res.end("home page")
  res.render("menu.ejs")

})
app.get("/menu", (req, res) => {
    //   res.end("login page")np
    res.render("menu.ejs")
   })

app.listen(8000)








