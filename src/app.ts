import express, { Application } from "express";
import cors from "cors";
const app: Application = express();
// application routes
import userRoute from "./app/modules/user/user.router";
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/user", userRoute);
export default app;
