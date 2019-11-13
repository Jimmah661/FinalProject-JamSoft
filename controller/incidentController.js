const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Incident
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  report: function(req, res) {
    db.Incident
      .find({_id: req.params.id, shortDescription: req.params.shortDescription})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  search: function(req, res) {
    db.Incident
      .find(req.body)
      .then(dbModel => {
        res.json(dbModel)
        return dbModel;
      })
      .then(dbModel => {
        console.log('req.body', req.body)
        console.log('dbModel', dbModel)
      })
  }
}