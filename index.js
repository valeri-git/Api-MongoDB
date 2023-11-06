import { config } from "dotenv";
import express, { json } from "express";
import { userRouter } from "./routes/user.routes.js";
import { db } from "./config/db.connect.js";
config();


const app = express();
app.use(json());

app.use("/user", userRouter);

app.all("*", (req, res, next) => {
  res.status(404).json({
    answer: {
      data: "Page not found",
    },
  });
});

app.use((err, req, res, next) => {
  res.status(err.code || 500).json({
    answer: {
      code: err.code || 500,
      data: err.message || "Server-Error",
    },
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is started on Port ${process.env.PORT}`);
})
