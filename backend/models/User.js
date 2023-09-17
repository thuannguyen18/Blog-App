import mongoose from "mongoose";

const validateEmail = (email) => {
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regEx.test(email);
};

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        min: 2,
        max: 50,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "Email address is required"],
        validate: [validateEmail, "Please fill a valid email address"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
        max: 50,
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    profilePicturePath: {
        type: String,
        default: "",
    },
    following: [
        { type: mongoose.Types.ObjectId, ref: "User" }
    ],
    followers: [
        { type: mongoose.Types.ObjectId, ref: "User" }
    ],
    isFollowing: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
export default User;