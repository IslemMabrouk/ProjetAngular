import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    customerName: String,
    products: Array,
    total: Number,
    status: String
});

const Order = mongoose.model("Order", orderSchema);

export default Order;