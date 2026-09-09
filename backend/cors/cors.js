import cors from "cors";

export const corsOptions = {
    origin : "http://localhost:4200",
    methods : ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
};

export const corsMiddleware = cors(corsOptions);
