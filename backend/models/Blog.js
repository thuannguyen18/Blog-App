const mongoose = require("mongoose");

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

module.exports = mongoose.model("Blog", BlogShema);