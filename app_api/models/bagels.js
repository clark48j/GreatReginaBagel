const mongoose= require('mongoose');

const bagelSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: String,
	rating: {
		type: Number,
		'default': 0,
		min: 0,
		max: 5
	},
});

mongoose.model('Bagel', bagelSchema);
