const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accessSchema = new Schema({
  accessGroup: String
});

const AccessGroups = mongoose.model("AccessGroups", accessSchema);

module.exports = AccessGroups;
