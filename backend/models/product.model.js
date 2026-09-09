import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    nom : {
        type:String,
        required:true,
        minlength:3,
        maxlength:10,
        trim:true, //supprimer les espaces inutiles au début et à la fin d'une chanie de caractères
    },
    prix : {
        type:Number,
        required: true,
    },
    description: {
        type: String,
        required:true,
        minlength:100
    },
    imgURL : String,
    createdAt : {
        type : Date,
        default:Date.now
    }
})

const Product = mongoose.model("Product", productSchema);

export default Product;