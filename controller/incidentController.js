const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Incident
      .find(req.query)
      .then(dbModel => {
        res.json(dbModel);
        console.log(dbModel)
      })
      .catch(err => res.status(422).json(err));
  }
}