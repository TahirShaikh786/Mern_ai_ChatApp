// Import Neccessary Packages & Files
import express from "express";
import morgan from "morgan";
import connectDB from "./db/db.js";

// Configuration
connectDB();
const app = express();

// MiddleWare
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;