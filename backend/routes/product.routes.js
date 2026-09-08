import express from "express";
import { addProduct, getAllProducts, getProductByID, updateProduct } from "../controllers/product.controller.js"

const router = express.Router();

router.post("/products", addProduct);
router.get("/products", getAllProducts);
router.get("/products/:id", getProductByID);
router.put("/products/:id", updateProduct);

export default router;