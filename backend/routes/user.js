import express from "express";
import { upload } from "../utils/upload.js";
import { 
    getAuthor, 
    getUser, 
    updateUser, 
    changePassword,
    followAuthor
} from "../controllers/user.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, getUser);
router.get("/:authorId", getAuthor);
router.patch("/:id", verifyToken, upload.single("picture"), updateUser);
router.patch("/:id/change-password", verifyToken, changePassword);
router.post("/:authorId/follow", verifyToken, followAuthor);

export default router;