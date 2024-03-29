import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/dbConnection.js";
import authRoute from "./routes/auth.js";
import blogRoute from "./routes/blog.js";
import userRoute from "./routes/user.js";
import commentRoute from "./routes/comment.js";
import saveBlogRoute from "./routes/saveBlog.js";
import draftRoute from "./routes/draft.js";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
connectDB();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* ROUTES */
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/blog", blogRoute);
app.use("/api/v1/blog-detail", commentRoute);
app.use("/api/v1/save-blog", saveBlogRoute);
app.use("/api/v1/draft", draftRoute);

app.listen(process.env.PORT, (err) => {
    if (err) console.log(err);
    console.log(`Server running on port ${process.env.PORT}`)
});