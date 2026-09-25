//Here we will work for the backend
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import router from "./router/userRouter.js";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import router1 from "./router/contactRoutes.js";
const app = express();

// dotenv.config();//It is used to load environment variable from the .env file to process.env file.
app.use(express.urlencoded({extended:true}));//express.urlencoded is the built in middleware used to read
// data send from the html form in url encoded format.
app.use(express.json());
app.use(cookieParser()); //cookie parser is an express.js middleware used to read cookie send by the browser
// and make them available in req.cookie.

const corseOptions = {
    origin:"http://localhost:5173",
    Credentials:true
}
app.use(cors(corseOptions)); //It is used to share the resource between two origins.


app.use("/api/v1/user",router);
app.use("/api/v1/message",router1);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    connectDB();
    console.log(`The server is listening on http://localhost:${PORT}`);
    
});


// import express from "express";
// import cookieParser from "cookie-parser";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";
// import companyRoutes from "./routes/companyRoutes.js";
// import jobRoutes from "./routes/jobRoutes.js";
// import applicationRoutes from "./routes/applicationRoutes.js";
// import path from "path";

// dotenv.config({});

// const app = express();
// const __dirname = path.resolve(); //for devops

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// const corsOptions = {
//   origin: "https://final-year-srgc-project-1.onrender.com",
//   credentials: true,
// };

// app.use(cors(corsOptions));

// app.use("/api/v1/user", authRoutes);
// app.use("/api/v1/company", companyRoutes);
// app.use("/api/v1/job", jobRoutes);
// app.use("/api/v1/application", applicationRoutes);

// // frontend static files
// app.use(express.static(path.join(__dirname, "my-project", "dist")));

// // React routing fix
// app.get(/.*/, (_, res) => {
//   res.sendFile(path.resolve(__dirname, "my-project", "dist", "index.html"));
// });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   connectDB();
//   console.log(`Server running on port ${PORT}`);
// });