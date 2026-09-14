import express from "express";
import { getHello, login, signup } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/Hello", getHello);
router.post("/users/signup", signup);
router.post("/users/login", login);

export default router;