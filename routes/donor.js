const express = require("express");
const router = express.Router();
const donorController = require("../controller/donor");

router.get("/", donorController.index); // - gethome page - http://localhost:3000/donor
router.post("/", donorController.create);

router.get("/new", donorController.new); //- http://localhost:3000/donor/new

router.delete("/:id", donorController.delete);
// router.get("/:id", donorController.edit);
router.put("/:id", donorController.update);

module.exports = router;
