import express from "express";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js"
import { corsMiddleware } from "./cors/cors.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
app.use(express.json());
// app.use(cors());  //Autorise tt
app.use(corsMiddleware);

//Routes
app.use("/Hello", userRoutes);
app.use("/api", productRoutes);


//Toujours à la fin
app.use(errorHandler);
export default app;