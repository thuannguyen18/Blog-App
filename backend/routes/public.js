import express from "express";
import Blog from "../models/Blog.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.find({}).populate("userId");
        res.status(200).json({ blogs });
    } catch (error) {
        console.log(error);
    }
});

export default router;