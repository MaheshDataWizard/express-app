import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

// Contact route
app.get("/contact", (req, res) => {
  res.send("This is the contact route");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is the about route");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
