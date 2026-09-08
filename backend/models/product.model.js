import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    nom : String,
    prix : Number,
    description: String,
    imgURL : String,
    createdAt : {
        type : Date,
        default:Date.now
    }
})

const Product = mongoose.model("Product", productSchema);

export default Product;