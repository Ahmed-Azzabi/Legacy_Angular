import express from "express";
import {
  getAllTickets,
  addTicket,
  deleteTicket,
} from "../controllers/support.js";

const router = express.Router();

router.get("/", getAllTickets);
router.post("/", addTicket);
router.delete("/:_id", deleteTicket);
export default router;
