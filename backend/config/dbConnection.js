import mongoose from "mongoose";
// import User from "../models/User.js";
// import Blog from "../models/Blog.js";
// import { users, posts } from "../data/index.js";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        // await User.insertMany(users);
        // await Blog.insertMany(posts);
        console.log('Connected DB');
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;