const { Router } = require("express");

const {
    createClient,
    getClient,
    getClientById,
    updateClient,
    deleteClient,
} = require("../controllers/client.controller.js");

const { validateClientData,
    updateClientData, } = require("../middlewares/client.middleware.js");

const router = Router(); 

router.post("/",validateClientData, createClient);
router.get("/", getClient);
router.get("/:id", getClientById);
router.put("/:id", updateClientData, updateClient);
router.delete("/:id", deleteClient);

module.exports = router;