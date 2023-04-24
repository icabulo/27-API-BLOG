import express from "express";
import commentsRoutes from "./routes/comments.routes.js";
import postsRoutes from "./routes/posts.routes.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/comment", commentsRoutes);
app.use("/post", postsRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Hello API Prisma</h1>");
});

/* //examples
app.post("/example", (req, res) => {
  res.json({ message: "post pending" });
}); */

app.listen(PORT, () => {
  console.log("Server Initialized");
});
