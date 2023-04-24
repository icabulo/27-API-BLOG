import { Router } from "express";
import { getAllPosts, createPost } from "../controllers/posts.controllers.js";

const router = Router();

// retrieve all posts and its comments
router.get("/", getAllPosts);

// create a new post
router.post("/", createPost);

export default router;
