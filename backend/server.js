import app from "./app.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv"; //Bibliothèque qui permet de lire le fichier .env

dotenv.config(); //on charge les variables du .env dans l'environnement de l'application
connectDB();

const PORT = 3000;

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});