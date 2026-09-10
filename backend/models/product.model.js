import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        minlength:3,
        maxlength:10,
        trim:true, //supprimer les espaces inutiles au début et à la fin d'une chanie de caractères
    },
    price : {
        type:Number,
        required: true,
    },
    description: {
        type: String,
        required:true,
        minlength:10
    },
    imgURL : {
        type: String,
        required:true,
    },
    createdAt : {
        type : Date,
        default:Date.now
    },
    stock : Number
})

const Product = mongoose.model("Product", productSchema);

export default Product;