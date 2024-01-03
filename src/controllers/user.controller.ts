import { Request , Response  } from "express";
import User from "../models/User";


const createUser = async (req:Request , res :Response)=>{

    const {email , anem ,addressLine1,city,country} = req.body;

    if(email){
        
        throw new Error("User already exist")
    }
    const userCreated = await User.create(req.body)
    // check if user already exisit
    //if not created it
    //return the user object on calling the client

    console.log("user created")
};

export default createUser

