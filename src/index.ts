import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import userRoute from './routes/user.route'
mongoose
 .connect(process.env.CONNECTION_STRING as string)
.then(() => { console.log("connected to the database") })

const app = express();
app.use(express.json())
app.use(cors());
const PORT = process.env.PORT || 3000



app.use("/api/user",userRoute)
// app.get("/test", async (req: Request, res: Response) => {
//     res.json({ message: "Hello!" })
// });

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})