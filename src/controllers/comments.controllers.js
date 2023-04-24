import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// const prisma = new PrismaClient({ log: ["query"] });

export const createNewComment = async (req, res) => {
  try {
    const comment = await prisma.comments.create({
      data: req.body,
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const getAllComments = async (req, res) => {
  try {
    const comments = await prisma.comments.findMany();
    if (comments.length >= 1) {
      res.status(200).json(comments);
    } else {
      res.status(209).json({ error: true, errorMessage: "No content" });
      //status-204-No-content doesn't have a body. I used code 209 for a custom message
    }
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const findCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const commentById = await prisma.comments.findFirst({
      where: {
        idcomment: parseInt(id),
      },
    });
    if (commentById === null) {
      res
        .status(209)
        .json({ error: true, erroMessage: "No content: Comment id not found" });
    } else {
      res.status(200).json(commentById);
    }
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const updateCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateComment = await prisma.comments.update({
      where: {
        idcomment: parseInt(id),
      },
      data: req.body,
    });
    res.status(200).json(updateComment);
  } catch (error) {
    if (error.code && error.code === "P2025") {
      res.status(209).json(error);
    } else {
      res.status(500).json({ error: true });
    }
  }
};

export const deleteCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteComment = await prisma.comments.delete({
      where: {
        idcomment: parseInt(id),
      },
    });
    res.json(deleteComment);
  } catch (error) {
    if (error.code && error.code === "P2025") {
      res.status(209).json(error);
    } else {
      res.status(500).json({ error: true });
    }
  }
};
