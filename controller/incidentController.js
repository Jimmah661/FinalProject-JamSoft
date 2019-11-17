const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Incident
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    db.Incident
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  search: function(req, res) {
    db.Incident
      .find(req.body)
      .then(dbModel => {
        res.json(dbModel)
        console.log('req.body', req.body)
        console.log('dbModel', dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Incident
      .create(req.body)
      .then(id => {
        res.json(id._id)
        console.log("id: ",id._id)
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Incident
      .findOneAndUpdate({_id: req.body._id}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}