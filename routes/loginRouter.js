import express from "express";
import { login, register } from "../controllers/loginController.js";
const router = express.Router();

router.route("/login").get(login);
router.route("/register").post(register);

export default router;
