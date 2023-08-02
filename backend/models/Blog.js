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
    content: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: [""],
        default: "",
        required: true,
    },
    picturePath: String,
    likes: {
        type: Map,
        of: Boolean,
    },
    commentId: {
        type: [{ type: mongoose.Types.ObjectId, ref: "Comment" }],
    }
}, { timestamps: true });

const Blog = mongoose.model("Blog", BlogShema);
export default Blog;