const router = require("express").Router();
const incidentController = require("../../controller/incidentController");

router.route("/")
  .get(incidentController.findAll);

router.route("/search")
  .post(incidentController.search);

module.exports = router;
