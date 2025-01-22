const { Router } = require("express");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

const {
  validateProductData,
  validateUpdateProduct,
} = require("../middlewares/product.middleware.js");

const router = Router();

router.post("/", validateProductData, createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", validateUpdateProduct, updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
