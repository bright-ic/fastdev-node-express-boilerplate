import express from "express";
const router = express.Router();
import { index } from "../controllers/indexController";

/* GET home page. */
router.get("/", index);

export default router;
