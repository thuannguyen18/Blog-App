import express from "express";
import verifyToken from "../middlewares/verifyToken.js";
import { 
    getAllDrafts, 
    getDraft,
    saveDraft,
    deleteDraft,
} from "../controllers/draft.js";

const router = express.Router();

router.use(verifyToken);
router.get("/", getAllDrafts);
router.get("/:id", getDraft);
router.post("/", saveDraft);
router.delete("/:id", deleteDraft);

export default router;