//Here we will work for the backend
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import router from "./router/userRouter.js";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import router1 from "./router/contactRoutes.js";
import path from "path";
const app = express();

const _dirname = path.resolve();
// dotenv.config();//It is used to load environment variable from the .env file to process.env file.
app.use(express.urlencoded({extended:true}));//express.urlencoded is the built in middleware used to read
// data send from the html form in url encoded format.
app.use(express.json());
app.use(cookieParser()); //cookie parser is an express.js middleware used to read cookie send by the browser
// and make them available in req.cookie.

const corseOptions = {
    origin:"https://manish-placement-portfolio-2.onrender.com",
    Credentials:true
}
app.use(cors(corseOptions)); //It is used to share the resource between two origins.


app.use("/api/v1/user",router);
app.use("/api/v1/message",router1);

app.use(express.static(path.join(_dirname,"/my-project/dist")));
app.get(/.*/,(_,res)=>{
    res.sendFile(path.resolve(_dirname,"my-project","dist","index.html"));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    connectDB();
    console.log(`The server is listening on http://localhost:${PORT}`);
    
});

