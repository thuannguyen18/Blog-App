import express from "express";
import verifyToken from "../middlewares/verifyToken.js";
import { 
    getComments, 
    createComment, 
    updateComment, 
    deleteComment 
} from "../controllers/comment.js";

const router = express.Router();

router.get("/:id/comments", getComments);
router.post("/create-comment", verifyToken, createComment);
router.patch("/update-comment/:id", verifyToken, updateComment);
router.delete("/delete-comment/:id", verifyToken, deleteComment);

export default router;