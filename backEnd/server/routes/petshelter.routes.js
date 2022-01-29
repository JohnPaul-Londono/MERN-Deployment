const PetShelterController = require("../controllers/petshelter.controller");


module.exports = app => {
    app.get("/api/petshelters", PetShelterController.findAllPetShelters);
    app.get("/api/petshelters/one/:_id", PetShelterController.findOneSinglePetShelter);
    app.put("/api/petshelters/update/:_id", PetShelterController.updateExistingPetShelter);
    app.post("/api/petshelters/new", PetShelterController.createNewPetShelter);
    app.delete("/api/petshelters/delete/:_id", PetShelterController.deleteAnExistingPetShelter);
};