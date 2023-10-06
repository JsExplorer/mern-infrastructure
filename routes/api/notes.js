const express = require("express");
const router = express.Router();
const notesCtrl = require("../../controllers/api/notes");
const ensureLoggedIn = require("../../config/ensureLoggedIn")

// POST /api/users
router.get("/", notesCtrl.getAll);
router.post("/", notesCtrl.create);
router.delete("/:id", notesCtrl.del); 

module.exports = router;