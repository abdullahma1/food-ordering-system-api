import express , {Request , Response} from 'express';
import cors  from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';


mongoose.connect(process.env.CONNECTION_STRING as string)

const app = express();
app.use(express.json())
app.use(cors());

app.get("/test", async (req:Request,res:Response)=>{
    res.json({message:"Hello!"})
});

app.listen(4000,()=>{
    console.log("server is running")
})