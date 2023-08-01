import express from "express";
import Blog from "../models/Blog.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.find({}).populate("user_id");

        if (blogs.length < 1) {
            return res.status(400).json({ message: "Blog empty" });
        }

        res.status(200).json({ blogs });
    } catch (error) {
        console.log(error);
    }
});

export default router;