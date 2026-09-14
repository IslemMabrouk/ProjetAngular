import express from "express";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import orderRoutes from "./routes/order.routes.js";
import { corsMiddleware } from "./cors/cors.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
app.use(express.json());
// app.use(cors());  //Autorise tt
app.use(corsMiddleware);

//Routes
app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);


//Toujours à la fin
app.use(errorHandler);
export default app;