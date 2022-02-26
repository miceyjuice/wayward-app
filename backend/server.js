import express from "express";
import dotenv from "dotenv";
import userRoutes from "../backend/routes/userRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded());

app.use("/api/users", userRoutes);

app.listen(port, () => console.log(`server is listening on port ${port}`));
