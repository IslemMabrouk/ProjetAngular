import express from "express";
import { addOrder, getAllOrders, getOrderByID, updateOrder, deleteOrderById } from "../controllers/order.controller.js";
import {successHandler} from "../middlewares/successHandler.js"

const router = express.Router();

router.post("/orders", addOrder, successHandler);
router.get("/orders", getAllOrders, successHandler);
router.get("/orders/:id", getOrderByID, successHandler);
router.put("/orders/:id", updateOrder, successHandler);
router.delete("/orders/:id", deleteOrderById, successHandler);

export default router;