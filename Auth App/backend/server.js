import express from "express";
import cors from "cors";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import connectDB from "./lib/db.js";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/auth", userRouter);

app.listen(3000, () => {
  connectDB();
  console.log(`server listening on port 3000`);
});
