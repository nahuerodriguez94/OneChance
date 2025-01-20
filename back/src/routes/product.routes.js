const { Router } = require("express");
const {
    createProduct
} = require ("../controllers/product.controller.js");
const { validateProductData } = require("../middlewares/product.middleware.js");

const router = Router();

router.post("/",validateProductData, createProduct);

module.exports = router;