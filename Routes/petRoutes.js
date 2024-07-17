const express = require("express");
const {
  updatePetDetails,
  getPetDetails,
} = require("../Controllers/petControllers");
const router = express.Router();

router.put("/pets/:id", updatePetDetails);
router.get("/pets", getPetDetails);

module.exports = router;
