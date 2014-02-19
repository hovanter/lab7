
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
	"title": String,
	"date": Date,
	"summary": String,
	"image": String 
});

exports.Project = Mongoose.model('Project', ProjectSchema);

// Model is a table/collection of documents that follow that schema 

// models.Project is our model is based on the schema (type)


