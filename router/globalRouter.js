import express from "express";
import routes from "../routes";
import { Home, 
    search
} from "../controller/videoController";
import { 
    join, 
    logout, 
    login 
} from "../controller/userController";

const globalRouter = express.Router();
// anonymous function = (req, res) => {body} | which is equivalent to const function = (req, res) => { body of function}
globalRouter.get(routes.home, Home);
globalRouter.get(routes.join, join); //join -box icon vala.
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;