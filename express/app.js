import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url"; // ✅ FIX

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

// ✅ Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  const startIndex = path.join(__dirname, "public", "index.html");
  res.sendFile(startIndex);
});

app.get("/product", (req, res) => {
  const { id, category } = req.query;
  res.send("This is the product page for product ID: " + id + " in category: " + category);
});

app.get("/profile/:username", (req, res) => {
  res.send("This is the profile page of " + req.params.username);
});

app.get("/profile/:username/article/:slug", (req, res) => {
  const { username, slug } = req.params;
  const formattedSlug = slug.replace(/-/g, ' ');
  res.send("This is the article page for " + formattedSlug + " by " + username);
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});