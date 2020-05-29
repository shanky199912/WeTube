import express from "express";

// const express = require('express') //import express from 'express'
const app = express()
const PORT = 4000;
// respond with "hello world" when a GET request is made to the homepage

//now we will handle the listening 
function handlelistening(){
  console.log(`Listening on http://localhost:${PORT}`); //template literals.
}

function handleHome(req, res){
  // console.log(req);
  res.send("HELLO WORLD");
}

function handleProfile(req, res){
  // console.log("Reqeust result :" + res);
  res.send("Hello Shashank Tewari");
}

app.get("/profile", handleProfile); //listening on profile page

app.get("/", handleHome); //listening on homePage.

app.listen(PORT, handlelistening); //sever starts listening when we run it.