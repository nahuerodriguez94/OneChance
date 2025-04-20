const { Router } = require("express");
const { Ticket } = require("../models/tickets.model.js");
const { getTicket } = require("../controllers/tickets.controller.js");

const router = Router();
router.get("/")

module.exports = router;