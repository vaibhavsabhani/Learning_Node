import express from "express";
import dotenv from "dotenv";
import path from "path";

const app = express();
dotenv.config();
const PORT = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  const startIndex = path.join(__dirname, "public", "index.html");
  res.sendFile(startIndex);
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});