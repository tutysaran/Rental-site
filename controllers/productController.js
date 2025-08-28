// controllers/productController.js
export const createProduct = async (req, res) => {
  try {
    const { name, price, category, type, brand, mileage, duration } = req.body;

    const product = new Product({
      name,
      price,
      category,
      type,
      brand,
      mileage,
      duration,
      // ✅ store correct relative URL
      image: req.file ? `/uploads/${req.file.filename}` : null,
    });

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
