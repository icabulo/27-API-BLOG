import { Router } from "express";
import {
  createNewComment,
  getAllComments,
  findCommentById,
  updateCommentById,
  deleteCommentById,
} from "../controllers/comments.controllers.js";

const router = Router();

// create a new comment
router.post("/", createNewComment);

// list all comments
router.get("/", getAllComments);

// get a comment by its ID
router.get("/:id", findCommentById);

// update comment by its ID
router.patch("/:id", updateCommentById);

// delete a comment
router.delete("/:id", deleteCommentById);

export default router;
