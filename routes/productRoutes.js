import express from "express";
import { 
  upload, 
  createProduct, 
  getProducts, 
  getProductsById, 
  updateProduct, 
  deleteProduct 
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/add", upload, createProduct);
router.get("/", getProducts);
router.get("/:id", getProductsById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
