import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url"; // ✅ FIX

const app = express();
dotenv.config();

// Middleware to parse form data
app.use(express.urlencoded());

const PORT = process.env.PORT || 3000;

// ✅ Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  const startIndex = path.join(__dirname, "public", "formSubmit.html");
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

app.post("/contact", (req, res) => {
  console.log(req.body,"<<<");
  res.redirect("/");
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "view", "404.html"));
})

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});