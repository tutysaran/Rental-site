import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { 
      type: String, 
      required: true,
      default: "https://via.placeholder.com/400x300?text=No+Image" // fallback
    },
    type: { type: String, required: true },
    brand: { type: String, required: true },
    mileage: { type: Number, required: true },
    duration: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
