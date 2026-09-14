import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    pwd: String,
    gender: String,
    country: String,
    interests: [String]  //Tableau
});

const User = mongoose.model("User", userSchema);

export default User;