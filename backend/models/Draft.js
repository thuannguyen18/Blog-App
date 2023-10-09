import mongoose from "mongoose";

const DraftSchema = new mongoose.Schema({
    userId: {
        type:mongoose.Types.ObjectId,
        ref: "User",
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Draft = mongoose.model("Draft", DraftSchema);
export default Draft;