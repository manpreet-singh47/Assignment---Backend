const petModel = require("../Models/petModel");

const updatePetDetails = async (req, res) => {
  try {
    const petId = req.params.id;
    const { name, age, breed } = req.body;

    const updatedPet = await petModel.findByIdAndUpdate(
      petId,
      { name, age, breed },
      { new: true }
    );
    if (updatedPet) {
      res.status(200).json(updatedPet);
    } else {
      res.status(404).json({ message: "Pet not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getPetDetails = async (req, res) => {
  try {
    const pets = await petModel.find();
    res.status(200).json(pets);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { updatePetDetails, getPetDetails };
