const router = require("express").Router();
const incidentController = require("../../controller/incidentController");

router.route("/")
  .get(incidentController.findAll);

router.route("/:id")
  .get(incidentController.report);

module.exports = router;
