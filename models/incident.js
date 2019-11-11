const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const incidentSchema = new Schema({
  shortDescription: {type:String, required: true},
  description: {type: String},
  client: {type: String, required: true},
  technician: {type: String},
  techGroup: {type: String},
  state: {type: String},
  created: {type: Date, required: true},
  updated: {type: Date, required: true},
  notes: Object
});

const Incident = mongoose.model("Incident", incidentSchema);

module.exports = Incident;
