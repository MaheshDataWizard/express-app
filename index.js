import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

// Dynamic routing in express
app.get("/user/:username", (req, res) => {
  const username = req.params.username;
  res.send(`Welcome ${username}`);
});

// /search?keyword=express
app.get("/search", (req, res) => {
  const keyword = req.query.keyword;
  res.send(`Searching for ${keyword}`);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
