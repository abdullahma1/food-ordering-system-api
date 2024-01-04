import { Request , Response  } from "express";
import User from "../models/User";


const createUser = async (req:Request , res :Response)=>{

    try{
        const { auth0Id, email , name ,addressLine1,city,country} = req.body;

        if(!auth0Id , !email , !name){
            return res.status(400).json({ message: "Missing required fields" });
        }


        const userAuthAlreadyExist = await User.findOne({auth0Id});
        
        if(userAuthAlreadyExist){
            
            throw new Error("User already exist")
        }
        // Create a new user
        const user = new User({ auth0Id, email, name, addressLine1, city, country });
        await user.save();

        // check if user already exisit
        //if not created it
        //return the user object on calling the client
    
        console.log("user created")
        res.status(201).json({"message":"User has been created successfully"});

    }
    catch(Error){
        console.log(Error)
        res.status(500).json({message:"Error creating user "})
    }
   
};

export default createUser

