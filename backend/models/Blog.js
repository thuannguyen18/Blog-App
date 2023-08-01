import mongoose from "mongoose";

const BlogShema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

const Blog = mongoose.model("Blog", BlogShema);
export default Blog;