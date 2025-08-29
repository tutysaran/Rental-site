import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/db.js"; // note .js extension

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Basic Route
app.get("/", (req, res) => {
  res.send("✅ Task API is running!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
