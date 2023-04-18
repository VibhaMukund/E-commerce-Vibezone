import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import dbConnect from "./config/db.js";
import authent from "./routes/authent.js";
import CategoryRoutes from "./routes/CategoryRoutes.js";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
dbConnect();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authent);
app.use("/api/v1/category", CategoryRoutes);
app.use("/api/v1/products", productRoutes);
app.use(express.static(path.join(__dirname, "./client/build")));

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    `Successfully running on ${process.env.DEV_MODE} mode on port ${PORT} `
      .bgGreen.white
  );
});
