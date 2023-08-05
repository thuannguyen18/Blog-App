import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    blogId: {
        type: mongoose.Types.ObjectId,
        ref: "Blog",
    },
    content: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;