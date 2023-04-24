import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// const prisma = new PrismaClient({ log: ["query"] });

export const getAllPosts = async (req, res) => {
  try {
    const completePosts = await prisma.posts.findMany({
      include: {
        comments: {
          select: {
            description: true,
          },
        },
      },
    });
    res.status(200).json(completePosts);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = await prisma.posts.create({
      data: req.body,
    });
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true });
  }
};
