const { Router } = require("express");
const { getCart, createCart, getAllCarts } = require("../controllers/cart.controller.js");

const router = Router();

router.get("/", getCart);
router.post("/", createCart);
router.get("/getAll", getAllCarts)

module.exports = router;
