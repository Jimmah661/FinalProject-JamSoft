const router = require("express").Router();
const incidentController = require("../../controller/incidentController");

router.route("/")
  .get(incidentController.findAll);

router.route("/show/:id?/:shortDescription?")
  .get(incidentController.report);

router.route("/search")
  .get(incidentController.findAll)
  .post(incidentController.search);

module.exports = router;
