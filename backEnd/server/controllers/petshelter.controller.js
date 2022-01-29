const PetShelter = require("../models/petshelter.model");

module.exports.findAllPetShelters = (req, res) => {
    PetShelter.find().collation({locale:'en',strength: 2}).sort({petType:1})
        .then(allDaPetShelters => res.json(allDaPetShelters))
        .catch(err => res.json({ message: "Something went wrong", err }));
};

module.exports.findOneSinglePetShelter = (req, res) => {
    PetShelter.findOne({ _id: req.params._id })
        .then(oneSinglePetShelter => res.json( {petshelter:oneSinglePetShelter }))
        .catch(err => res.json({ message: "Something went wrong", err }));
};

module.exports.createNewPetShelter = (req, res) => {
    PetShelter.create(req.body)
        .then(newlyCreatedPetShelter => res.json({ petshelter: newlyCreatedPetShelter }))
        .catch(err => res.status(400).json({ message: "Something went wrong", err }));
};

module.exports.updateExistingPetShelter = (req, res) => {
    PetShelter.findOneAndUpdate({ _id: req.params._id }, req.body, { runValidators: true })
        .then(updatedPetShelter => res.json({ petshelter: updatedPetShelter }))
        .catch(err => res.status(400).json({ message: "Something went wrong", err }));
};

module.exports.deleteAnExistingPetShelter = (req, res) => {
    PetShelter.deleteOne({ _id: req.params._id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", err }));
};
