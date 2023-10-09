import asyncHandler from "express-async-handler";
import Draft from "../models/Draft.js";

// READ
export const getAllDrafts = asyncHandler(async (req, res) => {
    const drafts = await Draft.find({ userId: req.userId });
    return res.status(200).json(drafts);
});


export const getDraft = asyncHandler(async (req, res) => {
    const draft = await Draft.findById(req.params.id);

    if (!draft) {
        return res.sendStatus(404);
    }
    
    return res.status(200).json(draft);
});


// CREATE
export const saveDraft = asyncHandler(async (req, res) => {
    const { title, content } = req.body;
    const contents = JSON.parse(content);

    if (title.length < 6 || !content) {
        return res.sendStatus(400);
    }

    const draft = {
        userId: req.userId,
        title,
        content: contents.map(content => content.data.text).join("\n")
    };

    const draftCreated = await Draft.create(draft);
    return res.status(201).json(draftCreated);
});


// DELETE
export const deleteDraft = asyncHandler(async (req, res) => {
    const draft = await Draft.findById(req.params.id);

    if (!draft) {
        return res.sendStatus(404);
    }

    await draft.deleteOne();

    const drafts = await Draft.find();
    return res.status(200).json(drafts);
});