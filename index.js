const express = require('express') //import express from 'express'
const app = express()

const PORT = 4000;
// respond with "hello world" when a GET request is made to the homepage

//now we will handle the listening 
function handlelistening(){
  console.log(`Listening on http://localhost:${PORT}`); //template literals.
}

app.listen(PORT, handlelistening); //sever starts listening when we run it.