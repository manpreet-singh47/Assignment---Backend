const petModel = require("../Models/petMode");

const updatePetDetails = async (req, res) => {
  try {
    const petId = req.params.id;
    const { name, age, breed } = req.body;

    const updatedPet = await Pet.findByIdAndUpdate(
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

const createPetProfile = async (req, res) => {
  const { name, age, breed } = req.body;
  try {
    const pet = await petModel.create({ name: name, age: age, breed: breed });
    return res.status(201).json(pet);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { updatePetDetails, createPetProfile };
