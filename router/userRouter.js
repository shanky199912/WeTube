import express from "express";
import routes from "../routes";
import {  
    userDetail, 
    editProfile,
    changePassword, 
    Users
} from "../controller/userController";

const userRouter = express.Router();

userRouter.get(routes.home, Users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

// export const userRouter = express.Router(); //here it just export this object.

// userRouter.get("/", (req, res) => res.send(`Hi from user index`));
// userRouter.get("/edit", (req, res) => res.send(`Hi from the user edit`));
// userRouter.get("/password", (req,res) => res.send(`HI Plss never share your password`));

export default userRouter; //exports the whole file.