import express from "express";
import commentsRoutes from "./routes/comments.routes.js";
import postsRoutes from "./routes/posts.routes.js";

const app = express();
app.use(express.json());

app.use("/comment", commentsRoutes);
app.use("/post", postsRoutes);

/* //examples
app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.post("/example", (req, res) => {
  res.json({ message: "post pending" });
}); */

app.listen(4000, () => {
  console.log("Server Initialized");
});
