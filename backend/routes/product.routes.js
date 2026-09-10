import express from "express";
import { addProduct, deleteProductById, getAllProducts, getProductByID, updateProduct } from "../controllers/product.controller.js"
import { validateProduct } from "../middlewares/product.validation.js";
import { transformProduct } from "../middlewares/transform.middleware.js";

const router = express.Router();

router.post("/products", transformProduct, validateProduct, addProduct);
router.get("/products", getAllProducts);
router.get("/products/:id", getProductByID);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProductById);

export default router;