import express from "express";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js"
import { corsMiddleware } from "./cors/cors.js";

const app = express();
app.use(express.json());
// app.use(cors());  //Autorise tt
app.use(corsMiddleware);

//Routes
app.use("/Hello", userRoutes);
app.use("/api", productRoutes);

export default app;