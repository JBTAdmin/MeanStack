var mongoose = require('mongoose');
schema = mongoose.Schema;

//var StudentSchema = new schema({
	var StudentSchema = mongoose.Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
		
		
	},
	age: {
		type: Number
	},
	sex: {
		type: String,
		required: true
	},
	country: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	}

});

module.exports = mongoose.model('student', StudentSchema);