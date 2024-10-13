import { Router} from "express";
import { user , mentor } from "./Schema.js";
const mentorshipRouter = Router();

mentorshipRouter.post("/mentorregistration", async (req, res) => {
          const {name , email , type} = req.body;
          const existinguser = await user.findOne({ email });
          if(!existinguser){
            return res.status(400).send("User does not exist");
          }
          const mentor1 = await mentor.create({user: existinguser._id, type });
          if(type == "mentor"){
            res.send(`<h1> ${name} , Thanks for registration as a mentor. </h1>`);
          }
          else{
            res.send(`<h1> ${name} ,Thanks for registration  as a mentee. </h1>`);
          }
          
       
}); 

export default mentorshipRouter;