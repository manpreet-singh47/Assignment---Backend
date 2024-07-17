const express = require("express");
const {
  updatePetDetails,
  createPetProfile,
} = require("../Controllers/petUpdateController");
const router = express.Router();

router.put("/pets/:id", updatePetDetails);
// router.get("/pets", updatePetDetails);
router.post("/pets", createPetProfile);

module.exports = router;
