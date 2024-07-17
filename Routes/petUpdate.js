const express = require("express");
const updatePetDetails = require("../Controllers/petUpdateController");
const router = express.Router();

router.put("/pets/:id", updatePetDetails);

module.exports = router;
