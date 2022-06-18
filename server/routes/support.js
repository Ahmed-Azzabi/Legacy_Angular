import express from "express";
import { getAllTickets, addTicket } from "../controllers/support.js";

const router = express.Router();

router.get("/", getAllTickets);
router.post("/", addTicket);

export default router;
