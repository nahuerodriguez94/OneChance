const { Router } = require("express");
const {
    createProduct,
    getProducts,
    getProductById,
} = require ("../controllers/product.controller.js");
const { validateProductData } = require("../middlewares/product.middleware.js");

const router = Router();

router.post("/",validateProductData, createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);

module.exports = router;