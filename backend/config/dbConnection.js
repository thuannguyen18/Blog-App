import mongoose from "mongoose";
import User from "../models/User.js";
import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";
import { users, posts, comments } from "../data/index.js";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        await User.insertMany(users);
        await Blog.insertMany(posts);
        await Comment.insertMany(comments);
        console.log('Connected DB');
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;