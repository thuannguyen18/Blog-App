import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import helmet from "helmet";

import connectDB from "./config/dbConnection.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import blogRoute from "./routes/blog.js";
import publicRoute from "./routes/public.js";

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/blogs", blogRoute);
app.use("/", publicRoute);

app.listen(process.env.PORT, (err) => {
    if (err) console.log(err);
    console.log(`Server running on port ${process.env.PORT}`)
});