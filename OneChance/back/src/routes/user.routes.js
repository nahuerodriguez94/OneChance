const { Router } = require("express");

const {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser,
} = require("../controllers/user.controller.js");

const {
  validateUser,
} = require("../middlewares/user.middleware.js");

const router = Router();

router.post("/", validateUser, createUser);
router.post("/login",loginUser);
router.post("/logout", logoutUser);
router.get("/", getUser);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
