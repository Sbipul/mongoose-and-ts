import express from "express";
import { createUser, getAnUser, getUsers } from "./user.controller";
const router = express.Router();
router.get("/", getUsers);
router.post("/create", createUser);
router.get("/:id", getAnUser);

export default router;
