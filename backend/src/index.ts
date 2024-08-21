import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";
// import myUserRoute from "./routes/myUserRoute";

mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => console.log("Connected to database!"));

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
    res.send({ message: "health Ok!" });
});

app.use("/api/my/user", myUserRoute);

// app.get("/test", async (req: Request, res: Response) => {
//     res.json({ message: "Hello!" });
// });

app.listen(7001, () => {
    console.log("Server Started on localhost:7001");
});