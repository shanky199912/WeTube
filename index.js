import express from "express";
// const express = require('express') //import express from 'express'
const app = express()
const PORT = 4000;
// respond with "hello world" when a GET request is made to the homepage

//now we will handle the listening 
const handlelistening = () =>
  console.log(`Listening on http://localhost:${PORT}`); //template literals.

const handleHome = (req, res) => res.send("HELLO WORLD");

const handleMiddle = (req, res, next) => {
    console.log("I am a MiddleWare");
    next();
}
// console.log("Reqeust result :" + res);
const handleProfile = (req, res) => res.send("Hello Shashank Tewari");

app.use(handleMiddle); //order for this middleware matters , it should be above those in which ur using middleware.

app.get("/profile", handleProfile); //listening on profile page

app.get("/", handleHome); //listening on homePage.

app.listen(PORT, handlelistening); //sever starts listening when we run it.