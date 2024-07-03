import express from "express";
const app = express();
import dotenv from "dotenv";
import morgan from "morgan";
import loginRouter from "./routes/loginRouter.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
dotenv.config();
app.use(express.json());
app.use(cookieParser());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1", loginRouter);

app.use("*", (req, res) => {
  res.status(404).json("Not Found");
});

app.use((err, req, res, next) => {
  const msg = err.message || "something went wrong";
  res.status(500).json({ msg });
});

const port = process.env.PORT || 4000;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} catch (error) {
  console.log(error);
}
