import express from "express";
import dotenv from "dotenv";
import userRoutes from "../backend/routes/userRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { connectDb } from "./config/db.js";

dotenv.config();

connectDb();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`server is listening on port ${port}`));
