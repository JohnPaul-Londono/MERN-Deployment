const mongoose = require("mongoose");

const PetShelterManagerSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "PetName must be 3 Characters Long "],
			minLength: [3, "PetName must be 3 Characters Long "]
		},
        petType: {
			type: String,
			required: [true, "PetType must be 3 Characters Long "],
			minLength: [3, "PetType must be 3 Characters Long "]
		},
        description: {
			type: String,
			required: [true, "PetDescription must be 3 Characters Long "],
			minLength: [3, "PetDescription must be 3 Characters Long "]
		},
        skill1: {
			type: String,
		},
        skill2: {
			type: String,

		},
        skill3: {
			type: String,

		},


	},
	{ timestamps: true }
);

const PetShelters = mongoose.model("PetShelters", PetShelterManagerSchema);

module.exports = PetShelters;