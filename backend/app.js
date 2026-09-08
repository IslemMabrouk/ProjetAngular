import express from "express";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js"

const app = express();
app.use(express.json());

//Routes
app.use("/Hello", userRoutes);
app.use("/api", productRoutes);

export default app;