import express from "express";
import multer from "multer";
import { 
    getAuthor, 
    getUser, 
    updateUser, 
    changePassword,
    followAuthor
} from "../controllers/user.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage });

router.get("/", verifyToken, getUser);
router.get("/:authorId", getAuthor);
router.patch("/:id", verifyToken, upload.single("picture"), updateUser);
router.patch("/:id/change-password", verifyToken, changePassword);
router.post("/:authorId/follow", verifyToken, followAuthor);

export default router;