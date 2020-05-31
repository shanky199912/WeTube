import express from "express";
import morgan from "morgan"; //morgan is a logging system.
import helmet from "helmet"; 
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import videoRouter from "./router/videoRouter";
import globalRouter from "./router/globalRouter";
import routes from "./routes";
import userRouter from "./router/userRouter";

// const express = require('express') //pretty old -> nowdays we use ES6 (express).
const app = express();

app.set("view engine", "pug");

// const PORT = 4000;
// // respond with "hello world" when a GET request is made to the homepage

// //now we will handle the listening 
// const handlelistening = () =>
//   console.log(`Listening on http://localhost:${PORT}`); //template literals.

// const handleHome = (req, res) => res.send("HELLO WORLD");

// const handleProfile = (req, res) => res.send("Hello Shashank Tewari");

// const handleMiddle = (req, res, next) => {
//     console.log("I am a MiddleWare");
//     next();
// }

// //we can use it globally like this for our requests.
// app.use(handleMiddle); //order for this middleware matters , it should be above those in which ur using middleware.

//better way to use logger and middle ware than the previous methods.
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(helmet()); //another middleware for securing the nodeJS apps.
app.use(morgan("dev")); //combined,dev,common, tiny, short.

app.use(routes.home, globalRouter);
app.use(routes.home, userRouter);
app.use(routes.home, videoRouter);
// //another example of middle ware where the middleware can stop the connection from happening.
// const middleware = (req, res, next) => {
//     res.send('not happening / Connection broken due to middleWare');
// }

// app.get("/profile", handleProfile); //listening on profile page

// app.get("/", handleHome); //listening on homePage.
// app.use(routes.home, globalRouter);
// app.use(routes.users, userRouter); //now this means that whenever someone goes to the route the u have to use this userRoute..
// app.use(routes.videos, videoRouter);
// app.listen(PORT, handlelistening); //sever starts listening when we run it.

export default app; //when someone imports my app.js file , i wiil give him my app object.
