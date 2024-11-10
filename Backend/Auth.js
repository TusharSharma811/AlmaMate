import { Router } from "express";
import { user } from "./Schema.js";
const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  const {name ,  email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).send("Please provide all details");
    }
    const existinguser = await user.findOne({ email });
    if(existinguser){
        return res.status(400).send({data:"User already exists"});
    }
  const emailarr = email.split("@");
    if (emailarr[1] !== "glbitm.ac.in") {
        return res.status(400).send("Please provide email with gmail.com");
    }
  const User = await user.create({name , email, password  });
    res.send(User);
});

authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send("Please provide email and password");
    }
    const existinguser = await user.findOne({ email });
    if (!existinguser) {
        return res.status(400).send({data : "User does not exist"});
    }
    if (existinguser.password !== password) {
        return res.status(400).send("Password does not match");
    }
    res.send(existinguser);
} );
export default authRouter;