import mongoose from "mongoose";

const SavedBlogSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    blogId: {
        type: mongoose.Types.ObjectId,
        ref: "Blog"
    },
    authorId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    isSaved: {
        type: Boolean,
        default: true,
    }
});

const SavedBlog = mongoose.model("Saved_Blog", SavedBlogSchema);
export default SavedBlog;