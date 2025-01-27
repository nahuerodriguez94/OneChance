const { Router } = require("express");

const {
    createClient,
    getClient,
    getClientById,
    updateClient,
    deleteClient,
} = require("../controllers/client.controller.js");

const router = Router(); 

router.post("/", createClient);
router.get("/", getClient);
router.get("/:id", getClientById);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);

module.exports = router;