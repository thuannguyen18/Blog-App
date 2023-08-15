import mongoose from "mongoose";

const BlogShema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    title: {
        type: String,
        required: true,
    },
    subTitle: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    picturePath: String,
    likes: {
        type: Map,
        of: Boolean,
    }
}, { timestamps: true });

const Blog = mongoose.model("Blog", BlogShema);
export default Blog;