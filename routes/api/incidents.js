const router = require("express").Router();
const incidentController = require("../../controller/incidentController");

router.route("/")
  .get(incidentController.findAll);

module.exports = router;
