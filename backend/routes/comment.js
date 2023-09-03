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
router.post("/:id/create-comment", verifyToken, createComment);
router.patch("/:id/update-comment", verifyToken, updateComment);
router.delete("/:id/delete-comment", verifyToken, deleteComment);

export default router;