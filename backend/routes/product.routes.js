import express from "express";
import { addProduct, deleteProductById, getAllProducts, getProductByID, updateProduct } from "../controllers/product.controller.js"
import { validateProduct } from "../middlewares/product.validation.js";

const router = express.Router();

router.post("/products", validateProduct, addProduct);
router.get("/products", getAllProducts);
router.get("/products/:id", getProductByID);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProductById);

export default router;