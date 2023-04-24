import express from "express";
import commentsRoutes from "./routes/comments.routes.js";
import postsRoutes from "./routes/posts.routes.js";

const app = express();
const PORT = process.env.PORT;

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

app.listen(PORT, () => {
  console.log("Server Initialized");
});
